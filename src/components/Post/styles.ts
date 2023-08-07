import { styled } from 'styled-components';

export const PostContainer = styled.article`
  background: ${(props) => props.theme['white']};
  border-radius: 8px;
  padding: 2.5rem;
  margin-top: 2rem;

  & + & {
    margin-top: 2rem;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      strong {
        color: ${(props) => props.theme['gray-900']};
      }
      span {
        color: ${(props) => props.theme['gray-900']};
      }
    }

    time {
      font-size: 0.875rem;
      color: ${(props) => props.theme['gray-600']};
    }
  }

  div {
    p {
      color: ${(props) => props.theme['gray-900']};
      margin-top: 1rem;
    }

    a {
      font-weight: bold;
      color: ${(props) => props.theme['green-400']};
      text-decoration: none;
    }

    a:hover {
      font-weight: bold;
      filter: brightness(0.8);
      text-decoration: none;
      transition: all 0.3s;
    }

    p a + a {
      font-weight: bold;
      color: var(--green-500);
      text-decoration: none;
      margin-left: 0.75rem;
    }

    span + span {
      font-weight: bold;
      color: var(--green-500);
      text-decoration: none;
      margin-left: 0.75rem;
    }
  }
`;

export const Hashtags = styled.span``;

export const CommentFormContainer = styled.form`
  width: 100%;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--gray-600);

  strong {
    line-height: 1.6;
    color: ${(props) => props.theme['gray-900']};
  }

  textarea {
    width: 100%;
    resize: none;
    background: ${(props) => props.theme['gray-100']};
    padding: 1rem;
    height: 6rem;
    border: 0;
    line-height: 1.4;
    color: ${(props) => props.theme['gray-900']};
    margin-top: 1rem;
    border-radius: 8px;
  }

  &:focus-within footer {
    visibility: visible;
    max-height: none;
  }

  button[type='submit'] {
    padding: 1rem 1.5rem;
    margin-top: 1rem;
    border-radius: 8px;
    border: 0;
    color: ${(props) => props.theme['white']};
    font-weight: bold;
    background: ${(props) => props.theme['green-400']};
    cursor: pointer;
  }

  button[type='submit']:not(:disabled):hover {
    padding: 1rem 1.5rem;
    margin-top: 1rem;
    border-radius: 8px;
    border: 0;
    filter: brightness(0.9);
    transition: all 0.3s;
    cursor: pointer;
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  textarea::placeholder {
    color: ${(props) => props.theme['gray-600']};
  }

  footer {
    visibility: hidden;
    max-height: 0;
  }
`;

export const AuthorPostContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  div {
    div {
      display: flex;
      gap: 0.5rem;

      svg {
        color: ${(props) => props.theme['green-400']};
      }

      @media (max-width: 768px) {
        svg {
          width: 1.25rem;
        }
      }
    }

    strong {
      display: block;
      color: ${(props) => props.theme['gray-900']};
      line-height: 1.6;
    }

    span {
      display: block;
      font-size: 0.875rem;
      line-height: 1.6;
      color: var(--gray-400);
    }
  }
`;

export const CommentListContainer = styled.div`
  margin-top: 2rem;
`;
