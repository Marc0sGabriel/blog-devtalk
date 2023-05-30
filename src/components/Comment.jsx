import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <img
        src="https://lh3.googleusercontent.com/a/AAcHTteo5eEKMqEfRCJdsJZUm5stTMYPh9dWUni2Rc18=s83-c-mo"
        alt="foto de perfil usuário"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Marcos Gabriel</strong>
              <time
                title="29 de maio às 16:04:00"
                dateTime="2023-05-29 16:04:00"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} weight="regular" />
            </button>
          </header>

          <p>Nossa que projeto incrivel!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={16} weight="regular" />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
