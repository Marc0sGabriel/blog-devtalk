import { Avatar } from './Avatar';
import styles from './NewPost.module.css';

interface Author {
  avatarUrl: string;
}

interface NewPostProps {
  author: Author;
}

export function NewPost() {
  return (
    <>
      <div className={styles.createNewPostContainer}>
        <header>
          <Avatar
            src="https://github.com/Marc0sGabriel.png"
            alt={'foto de perfil'}
          />
          <form>
            <textarea
              name="createPost"
              placeholder="Quais as novidades?"
            ></textarea>
          </form>
        </header>
      </div>
    </>
  );
}
