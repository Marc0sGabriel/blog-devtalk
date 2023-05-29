import styles from './Header.module.css';
import blogLogo from '../../public/images/logo.svg';

export function Header() {
  return (
    <div className={styles.header}>
      <img src={blogLogo} alt="logo do blog" />
    </div>
  );
}
