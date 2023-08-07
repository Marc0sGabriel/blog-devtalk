import { styled } from 'styled-components';

export const Wrapper = styled.div`
  max-width: 70rem;
  margin: 2rem auto;
  padding: 0 1rem;

  display: grid;
  grid-template-columns: 356px 1fr;
  align-items: flex-start;
  gap: 2rem;

  @media (max-width: 768px) {
    html {
      font-size: 80%;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1.25rem;
  }
`;
