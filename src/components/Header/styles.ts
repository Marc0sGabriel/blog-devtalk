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
    padding: 1.25rem 0;
  }

  & strong {
    font-size: 1.25rem;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;
