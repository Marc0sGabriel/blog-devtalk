import { styled } from 'styled-components';

export const PostContainer = styled.article`
  background: ${(props) => props.theme['white']};
  border-radius: 8px;
  padding: 2.5rem;

  margin-top: 2rem;
  max-width: 730.75px;
  overflow-wrap: break-word;

  & + & {
    margin-top: 2rem;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    time {
      font-size: 0.875rem;
      color: ${(props) => props.theme['gray-600']};
    }

    div {
      display: flex;
      align-items: center;
      gap: 1rem;

      div {
        display: block;
        strong {
          display: block;
          color: ${(props) => props.theme['gray-900']};
          line-height: 1.6;
        }

        span {
          display: block;
          font-size: 0.875rem;
          line-height: 1.6;
          color: ${(props) => props.theme['gray-900']};
        }
      }
    }
  }
`;

export const ContentContainer = styled.div`
  line-height: 1.6;
  color: ${(props) => props.theme['gray-900']};
  margin-top: 1.5rem;

  p {
    margin-top: 1rem;

    a + a {
      font-weight: bold;
      color: ${(props) => props.theme['green-400']};
      text-decoration: none;
      margin-left: 0.75rem;
    }
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

  span + span {
    font-weight: bold;
    color: ${(props) => props.theme['green-400']};
    text-decoration: none;
    margin-left: 0.75rem;
  }
`;
