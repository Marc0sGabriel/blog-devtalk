import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from '../Avatar';
import { useState } from 'react';
import {
  CommentContainer,
  CommentContentContainer,
  CommentFooter,
} from './styles';

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1;
    });
  }

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  const publishedCommentDate = new Date();

  const publishedCommentFormat = format(
    publishedCommentDate,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedCommentToNow = formatDistanceToNow(publishedCommentDate, {
    locale: ptBR,
    addSuffix: true,
  });

  return (
    <CommentContainer>
      <Avatar
        hasBorder={false}
        src="https://github.com/Marc0sGabriel.png"
        alt={'foto de perfil do usuario'}
      />

      <div>
        <CommentContentContainer>
          <header>
            <div>
              <strong>Marcos Gabriel</strong>
              <time
                title={publishedCommentFormat}
                dateTime={publishedCommentDate.toISOString()}
              >
                {publishedCommentToNow}
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={22} weight="regular" />
            </button>
          </header>

          <p>{content}</p>
        </CommentContentContainer>

        <CommentFooter>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={16} weight="bold" />
            Aplaudir <span>{likeCount}</span>
          </button>
        </CommentFooter>
      </div>
    </CommentContainer>
  );
}
