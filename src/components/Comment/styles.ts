import styled from 'styled-components';

export const CommentContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 1rem;

  img {
    width: 3rem;
    height: 3rem;
    border-radius: 8px;
  }

  div {
    flex: 1;
  }
`;

export const CommentContentContainer = styled.div`
  background: ${(props) => props.theme['gray-100']};
  border-radius: 8px;
  padding: 1rem;
  max-width: 30rem;
  overflow-wrap: break-word;

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    button {
      cursor: pointer;
      background: transparent;
      color: ${(props) => props.theme['gray-500']};
      border: 0;
      line-height: 0;
      border-radius: 2px;

      transition: all 0.3s;
    }

    button:hover {
      color: ${(props) => props.theme['red-400']};
    }

    div {
      strong {
        display: block;
        font-size: 0.875rem;
        line-height: 1.6;
      }

      time {
        display: block;
        font-size: 0.78rem;
        font-weight: 500;
        line-height: 1.6;
        color: ${(props) => props.theme['gray-500']};
      }
    }
  }

  p {
    color: ${(props) => props.theme['gray-900']};
    margin-top: 1rem;
  }
`;

export const CommentFooter = styled.footer`
  margin-top: 1rem;

  button {
    display: flex;
    align-items: center;
    background: transparent;
    border: 0;
    cursor: pointer;
    color: ${(props) => props.theme['gray-600']};
    font-weight: 500;
    transition: all 0.3s;

    span::before {
      content: '•';
      margin-right: 0.5rem;
      margin-left: 0.5rem;
    }

    svg {
      margin-right: 0.5rem;
    }
  }

  button:hover {
    color: ${(props) => props.theme['green-400']};
  }
`;
