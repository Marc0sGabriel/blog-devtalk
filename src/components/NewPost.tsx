import { PaperPlane } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './NewPost.module.css';
import { Comment } from './Comment';

import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import nextId from 'react-id-generator';

const id = nextId('post-');

export function NewPost() {
  const [comments, setComment] = useState<string[]>([]);
  const [post, setPost] = useState<string[]>([]);
  const [newPostText, setNewPostText] = useState('');

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

  function handleCreateNewPost(event: FormEvent) {
    event.preventDefault();
    setPost([...post, newPostText]);

    setNewPostText('');
  }

  function handleNewPostChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewPostText(event.target.value);
  }

  function handleNewPostInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Preencha esse campo');
  }
  const isEmpty = newPostText.length === 0;
  const isEmptyComment = newCommentText.length === 0;

  return (
    <>
      <div className={styles.createNewPostContainer}>
        <Avatar
          src="https://github.com/Marc0sGabriel.png"
          alt={'foto de perfil'}
        />
        <form className={styles.newPostForm} onSubmit={handleCreateNewPost}>
          <header>
            <textarea
              required
              name="post"
              onChange={handleNewPostChange}
              onInvalid={handleNewPostInvalid}
              value={newPostText}
              placeholder="Quais as novidades?"
            />

            <button type="submit" disabled={isEmpty}>
              <PaperPlane size={23} weight="bold" />
            </button>
          </header>
        </form>
      </div>

      <div>
        {post
          .map((posts) => {
            return (
              <div className={styles.post} key={id}>
                <article>
                  <header>
                    <div className={styles.author}>
                      <Avatar src={'https://github.com/Marc0sGabriel.png'} />

                      <div className={styles.authorInfo}>
                        <div className={styles.authorCheck}>
                          <strong>Marcos Gabriel</strong>
                        </div>
                        <span>Software Engineer</span>
                      </div>
                    </div>

                    <time title={''}>Há poucos segundos</time>
                  </header>

                  <div className={styles.content}>{posts}</div>

                  <form
                    onSubmit={handleCreateNewComment}
                    className={styles.commentForm}
                  >
                    <strong>Deixe seu feedback</strong>

                    <textarea
                      required
                      key={id}
                      name="comment"
                      onChange={handleNewCommentChange}
                      onInvalid={handleNewCommentInvalid}
                      value={newCommentText}
                      placeholder="Deixe seu comentário"
                    />

                    <footer>
                      <button type="submit" disabled={isEmptyComment}>
                        Publicar
                      </button>
                    </footer>
                  </form>

                  <div className={styles.commentList}>
                    {comments.map((comment) => {
                      return (
                        <Comment
                          key={id}
                          content={comment}
                          onDeleteComment={deleteComment}
                        />
                      );
                    })}
                  </div>
                </article>
              </div>
            );
          })
          .reverse()}
      </div>
    </>
  );
}
