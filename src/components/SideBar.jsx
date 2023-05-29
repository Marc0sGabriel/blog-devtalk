import styles from './SideBar.module.css';
import { PencilSimple } from 'phosphor-react';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1601645191163-3fc0d5d64e35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
      />

      <div className={styles.profile}>
        <img
          src="https://lh3.googleusercontent.com/a/AAcHTteo5eEKMqEfRCJdsJZUm5stTMYPh9dWUni2Rc18=s83-c-mo"
          alt="foto de perfil usuário"
          className={styles.avatar}
        />

        <strong>Marcos Gabriel</strong>
        <span>Software Engineer</span>
      </div>

      <footer>
        <a href="#">
          <PencilSimple size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
