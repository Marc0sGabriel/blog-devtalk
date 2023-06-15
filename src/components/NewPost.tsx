import { PaperPlane } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './NewPost.module.css';
import { useState } from 'react';

export function NewPost() {
  const [newPostText, setNewPostText] = useState('');
  const isEmpty = newPostText.length === 0;

  return (
    <>
      <div className={styles.createNewPostContainer}>
        <Avatar
          src="https://github.com/Marc0sGabriel.png"
          alt={'foto de perfil'}
        />
        <form className={styles.newPostForm}>
          <header>
            <textarea name="createPost" placeholder="Quais as novidades?" />

            <button type="submit" disabled={isEmpty}>
              <PaperPlane size={23} weight="bold" />
            </button>
          </header>
        </form>
      </div>
    </>
  );
}
