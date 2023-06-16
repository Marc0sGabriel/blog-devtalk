import { PaperPlane } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './NewPost.module.css';

import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { PostLayout } from './PostLayout';

export function NewPost() {
  const [post, setPost] = useState<string[]>([]);
  const [newPostText, setNewPostText] = useState('');

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
          .map((postagem) => {
            return (
              <div key={postagem}>
                <PostLayout key={postagem} content={postagem} />
              </div>
            );
          })
          .reverse()}
      </div>
    </>
  );
}
