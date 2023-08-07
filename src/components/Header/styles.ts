import { styled } from 'styled-components';

export const HeaderContainer = styled.header`
  & {
    position: sticky;
    top: 0;
    z-index: 60;
    backdrop-filter: blur(10px);
    margin-bottom: 3rem;
    background: ${(props) => props.theme['white']};
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    padding: 1.25rem 2rem;
    box-shadow: 0px 6px 15px rgba(12, 12, 12, 0.03);
  }

  strong {
    font-size: 1.5rem;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
      width: 3rem;
      height: 3rem;
      border-radius: 9999px;
    }
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
