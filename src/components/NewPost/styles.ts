import { styled } from 'styled-components';

export const NewPostContainer = styled.div`
  position: relative;
  top: 0.5rem;
  z-index: 50;

  background-color: ${(props) => props.theme['gray-200']};
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 1rem 1rem;
  outline: 1px solid ${(props) => props.theme['gray-300']};

  margin-bottom: 8rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  header {
    width: 100%;

    display: flex;
    align-items: center;
    gap: 1rem;
    padding-bottom: 1rem;

    textarea {
      width: 80%;

      resize: none;
      overflow: hidden;
      overflow: -moz-hidden-unscrollable;
      background: ${(props) => props.theme['gray-300']};
      padding: 0.875rem;
      height: 3rem;
      border: 0;
      line-height: 1.4;
      color: ${(props) => props.theme['gray-900']};
      margin-top: 1rem;
      border-radius: 8px;
    }

    textarea::placeholder {
      font-weight: 500;
      color: ${(props) => props.theme['gray-500']};
    }
  }

  form {
    width: 100%;
    &:focus-within header button {
      visibility: visible;
      max-height: none;
    }
    header {
      display: flex;
      justify-content: space-around;
      align-items: center;

      button {
        visibility: hidden;
        max-height: 0;
      }

      button {
        margin-top: 1rem;
        background: var(--green-500);
        border: none;
        border-radius: 9999px;
        height: 3rem;
        width: 3rem;
        color: var(--gray-100);

        font-weight: bold;

        cursor: pointer;
      }

      button[type='submit']:not(:disabled):hover {
        background: var(--green-300);
        transition: 0.3s all;
      }

      button:disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }
    }
  }
`;
