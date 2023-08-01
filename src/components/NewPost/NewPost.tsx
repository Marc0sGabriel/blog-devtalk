import { PaperPlane } from 'phosphor-react';
import { Avatar } from '../Avatar';

import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { PostLayout } from './UserNewPost';
import { NewPostContainer } from './styles';

export function NewPost() {
  const [post, setPost] = useState<string[]>([]);
  const [newPostText, setNewPostText] = useState('');

  function handleCreateNewPost(event: FormEvent) {
    event.preventDefault();
    setPost([...post, newPostText]);

    setNewPostText('');
  }

  function handleNewPostChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewPostText(event.target.value);
  }

  function handleNewPostInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Preencha esse campo');
  }
  const isEmpty = newPostText.length === 0;

  return (
    <>
      <NewPostContainer>
        <Avatar
          src="https://github.com/Marc0sGabriel.png"
          alt={'foto de perfil'}
        />
        <form onSubmit={handleCreateNewPost}>
          <header>
            <textarea
              required
              name="post"
              onChange={handleNewPostChange}
              onInvalid={handleNewPostInvalid}
              value={newPostText}
              placeholder="Quais as novidades?"
            />

            <button type="submit" disabled={isEmpty}>
              <PaperPlane size={23} weight="bold" />
            </button>
          </header>
        </form>
      </NewPostContainer>

      <div>
        {post
          .map((postagem) => {
            return (
              <div key={postagem}>
                <PostLayout key={postagem} content={postagem} />
              </div>
            );
          })
          .reverse()}
      </div>
    </>
  );
}
