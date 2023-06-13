import { Avatar } from './Avatar';
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
        <Avatar
          src="https://github.com/Marc0sGabriel.png"
          alt={'foto de perfil usuario'}
        />

        <strong>Marcos Gabriel</strong>
        <span>Software Engineer</span>

        <p>✨ Adepto da experiência do usuário e defensor da usabilidade.</p>
      </div>

      <div className={styles.containerStatsFollowers}>
        <div>
          <span>1,243</span>
          <p>Seguidores</p>
        </div>
        <div className={styles.separatorStatsFollowers}></div>
        <div>
          <span>527</span>
          <p>Seguindo</p>
        </div>
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
