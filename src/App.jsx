import { Post } from './Post';
import { Header } from './components/Header';
import './global.css';

export function App() {
  return (
    <>
      <Header />
      <Post author="Marcos Gabriel" content="Meu primeiro post" />

      <Post author="Drake" content="Dawg!" />

      <Post author="21 savage" content="Oh god!" />
    </>
  );
}
