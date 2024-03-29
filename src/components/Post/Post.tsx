import React, { ChangeEvent, FormEvent, InvalidEvent } from 'react';

import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from '../Avatar';
import { Comment } from '../Comment/Comment';
import { useState } from 'react';
import { CheckCircle } from 'phosphor-react';
import { PostProps } from '../../types/post';
import {
  AuthorPostContainer,
  CommentFormContainer,
  CommentListContainer,
  PostContainer,
} from './styles';

export function Post({ author, content, publishedAt }: PostProps) {
  const [comments, setComment] = useState<string[]>([]);

  const [newCommentText, setNewCommentText] = useState('');

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();
    setComment([...comments, newCommentText]);

    setNewCommentText('');
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório');
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });

    setComment(commentsWithoutDeletedOne);
  }

  const publishedDateFormat = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const isEmpty = newCommentText.length === 0;

  return (
    <>
      <PostContainer>
        <header>
          <AuthorPostContainer>
            <Avatar
              hasBorder={true}
              src={author.avatarUrl}
              alt={'foto de perfil'}
            />

            <div>
              <div>
                <strong>{author.name}</strong>
                <CheckCircle size={20} weight="fill" />
              </div>
              <span>{author.role}</span>
            </div>
          </AuthorPostContainer>

          <time
            title={publishedDateFormat}
            dateTime={publishedAt.toISOString()}
          >
            {publishedDateToNow}
          </time>
        </header>

        <div>
          {content.map((line) => {
            if (line.type === 'paragraph') {
              return <p key={line.content}>{line.content}</p>;
            } else if (line.type === 'link') {
              return (
                <p key={line.content}>
                  <a href="#">{line.content}</a>
                </p>
              );
            } else if (line.type === 'hashtag') {
              return (
                <span key={line.content}>
                  <a href="#">{line.content}</a>
                </span>
              );
            }
          })}
        </div>

        <CommentFormContainer onSubmit={handleCreateNewComment}>
          <strong>Deixe seu feedback</strong>

          <textarea
            required
            name="comment"
            onChange={handleNewCommentChange}
            onInvalid={handleNewCommentInvalid}
            value={newCommentText}
            placeholder="Deixe seu comentário"
          />

          <footer>
            <button type="submit" disabled={isEmpty}>
              Publicar
            </button>
          </footer>
        </CommentFormContainer>

        <CommentListContainer>
          {comments.map((comment) => {
            return (
              <Comment
                key={comment}
                content={comment}
                onDeleteComment={deleteComment}
              />
            );
          })}
        </CommentListContainer>
      </PostContainer>
    </>
  );
}
