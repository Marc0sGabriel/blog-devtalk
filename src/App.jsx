import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/SideBar';

import './global.css';
import styles from './App.module.css';

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Marcos Gabriel" content="Meu primeiro post" />
          <Post author="Marcos Gabriel" content="Meu primeiro post" />
        </main>
      </div>
    </>
  );
}
