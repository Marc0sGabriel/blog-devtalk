import React from 'react';
import { Post } from '../../components/Post/Post';
import { Header } from '../../components/Header/Header';
import { Sidebar } from '../../components/Sidebar/SideBar';
import { NewPost } from '../../components/NewPost/NewPost';

import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../../styles/themes/default';
import { GlobalStyle } from '../../styles/global';
import { Wrapper } from './styles';

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
        content: `Este projeto incrível, 
        concebido por uma equipe brilhante de engenheiros e desenvolvedores, utiliza 
        toda a potência e flexibilidade do
        framework .NET para criar uma solução verdadeiramente 
        inovadora. Com a habilidade de aproveitar a versatilidade do C#, uma linguagem de programação de renome mundial, combinada com a solidez do ambiente de execução do .NET, conseguimos criar uma aplicação que ultrapassa os limites do que era considerado possível.`,
      },
      { type: 'paragraph', content: 'segue o link abaixo:' },
      { type: 'link', content: 'www.exemplo.com/projeto' },
      { type: 'hashtag', content: '#CSharp' },
      { type: 'hashtag', content: '#dotNet' },
      { type: 'hashtag', content: '#programação' },
      { type: 'hashtag', content: '#microsoft' },
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

export function Home() {
  return (
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
  );
}
