import { Post } from './Post';
import { Header } from './components/Header';
import './global.css';
import styles from './App.module.css';

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <aside>sidebar</aside>
        <main>
          <Post author="Marcos Gabriel" content="Meu primeiro post" />

          <Post author="Drake" content="Dawg!" />

          <Post author="21 savage" content="Oh god!" />
        </main>
      </div>
    </>
  );
}
