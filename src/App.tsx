import React from 'react';
import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/SideBar';

import './global.css';
import styles from './App.module.css';
import { NewPost } from './components/NewPost';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: `https://imageio.forbes.com/specials-images/imageserve/62d599ede3ff49f348f9b9b4/0x0.jpg?format=jpg&crop=821,821,x155,y340,safe&height=416&width=416&fit=bounds`,
      name: 'Bill Gates',
      role: 'Co-founder @Microsoft',
    },
    content: [
      {
        type: 'paragraph',
        content: `Este projeto visa a criação de um template que possa ser utilizado no
      momento de criação de projetos utilizando React Native, visto que o
      processo de instalação e configuração das libs no início de um projeto
      podem gerar certa complexidade e muitas vezes até erros que atrasam o
      processo, atrapalhando assim o fluxo de desenvolvimento.`,
      },
      { type: 'paragraph', content: 'segue o link abaixo:' },
      { type: 'link', content: 'www.exemplo.com/projeto' },
      { type: 'hashtag', content: '#react' },
      { type: 'hashtag', content: '#projeto' },
      { type: 'hashtag', content: '#programação' },
      { type: 'hashtag', content: '#typescript' },
    ],
    publishedAt: new Date('2023-06-01 10:30:50'),
  },

  {
    id: 2,
    author: {
      avatarUrl:
        'https://t.ctcdn.com.br/s2JXi8cJqXFQE7SAkzV2IBz8AKw=/400x400/smart/filters:format(webp)/i490761.jpeg',
      name: 'Steve Jobs',
      role: 'CEO @Apple',
    },
    content: [
      {
        type: 'paragraph',
        content: `Em síntese, Swift é uma linguagem de programação desenvolvida pelos engenheiros da Apple liderados por Chris Lattner. Ele é um software engineer norte-americano, também conhecido como autor do LLVM e do compilador Clang.`,
      },
      {
        type: 'paragraph',
        content: `A linguagem foi lançada em 2014 durante a conferência anual da Apple. Logo em 2015, Swift foi disponibilizado em código aberto sob a licença da Apache 2.0.`,
      },

      { type: 'link', content: 'www.apple.com/projeto' },
      { type: 'hashtag', content: '#apple' },
      { type: 'hashtag', content: '#ios' },
      { type: 'hashtag', content: '#programação' },
      { type: 'hashtag', content: '#swift' },
      { type: 'hashtag', content: '#apache' },
    ],
    publishedAt: new Date('2023-03-10 20:00:00'),
  },
];

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <NewPost />
          {posts.map((posts) => {
            return (
              <Post
                key={posts.id}
                author={posts.author}
                content={posts.content}
                publishedAt={posts.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}
