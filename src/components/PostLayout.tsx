import React, { ChangeEvent, FormEvent, InvalidEvent } from 'react';

import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import { useState } from 'react';
import styles from './PostLayout.module.css';

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  content: string;
}

export interface IPostProps {
  author: Author;
  content: string[];
  publishedAt: Date;
}

export function PostLayout({ content }: IPostProps) {
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

  const publishedAt = new Date();

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
            <Avatar
              src={'https://github.com/Marc0sGabriel.png'}
              alt={'foto de perfil'}
            />

            <div className={styles.authorInfo}>
              <strong>Marcos Gabriel</strong>
              <span>Software Engineer</span>
            </div>
          </div>

          <time
            title={publishedDateFormat}
            dateTime={publishedAt.toISOString()}
          >
            {publishedDateToNow}
          </time>
        </header>

        <div className={styles.content}>{content}</div>

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
