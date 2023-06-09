import React, { ChangeEvent, FormEvent, InvalidEvent } from 'react';

import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import { useState } from 'react';
import { CheckCircle } from 'phosphor-react';
import { PostProps } from '../types/post';
import styles from './Post.module.css';

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
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <Avatar src={author.avatarUrl} alt={'foto de perfil'} />

            <div className={styles.authorInfo}>
              <div className={styles.authorCheck}>
                <strong>{author.name}</strong>
                <CheckCircle size={20} />
              </div>
              <span>{author.role}</span>
            </div>
          </div>

          <time
            title={publishedDateFormat}
            dateTime={publishedAt.toISOString()}
          >
            {publishedDateToNow}
          </time>
        </header>

        <div className={styles.content}>
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
                <span key={line.content} className={styles.hashtag}>
                  <a href="#">{line.content}</a>
                </span>
              );
            }
          })}
        </div>

        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
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
        </form>

        <div className={styles.commentList}>
          {comments.map((comment) => {
            return (
              <Comment
                key={comment}
                content={comment}
                onDeleteComment={deleteComment}
              />
            );
          })}
        </div>
      </article>
    </>
  );
}
