import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://lh3.googleusercontent.com/a/AAcHTteo5eEKMqEfRCJdsJZUm5stTMYPh9dWUni2Rc18=s83-c-mo"
            alt="foto autor da postagem"
          />

          <div className={styles.authorInfo}>
            <strong>Marcos Gabriel</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="29 de maio às 16:04:00" dateTime="2023-05-29 16:04:00">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>
          Este projeto visa a criação de um template que possa ser utilizado no
          momento de criação de projetos utilizando React Native, visto que o
          processo de instalação e configuração das libs no início de um projeto
          podem gerar certa complexidade e muitas vezes até erros que atrasam o
          processo, atrapalhando assim o fluxo de desenvolvimento.
        </p>

        <p>
          Para conseguir utilizar o template, seja através do React Native CLI
          ou com uma cópia local dos arquivos, siga o link abaixo.
        </p>
        <a href="#">www.exemplo.com/projeto</a>
        <p>
          <a href="#">#nlw</a>
          <a href="#">#bootcamp</a>
          <a href="#">#rocketseat</a>
          <a href="#">#programação</a>
          <a href="#">#reactNative</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe seu comentário" />

        <button type="submit">Comentar</button>
      </form>
    </article>
  );
}
