import { HouseSimple } from 'phosphor-react';
import { styled } from 'styled-components';

export const SidebarContainer = styled.aside`
  background: ${(props) => props.theme['gray-100']};
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;

  height: 100%;

  nav {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    a {
      display: flex;
      align-items: center;
      gap: 0.875rem;
      text-decoration: none;
      font-weight: 600;
      width: fit-content;
      color: ${(props) => props.theme['gray-600']};
      transition: all 0.3s;

      &.active {
        color: ${(props) => props.theme['gray-900']};
      }
    }

    a:hover {
      color: black;
    }
  }

  @media (max-width: 768px) {
    position: static;
    width: 380px;

    footer a {
      font-size: 1.1rem;
    }

    p {
      font-size: 1.1rem;
    }

    span {
      font-size: 1.5rem;
    }

    strong {
      font-size: 1.25rem;
    }

    span {
      font-size: 1rem;
    }

    p {
      font-size: 1.1rem;
    }
  }
`;

export const NewTopicsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;

  a {
    width: fit-content;
    span {
      font-size: 0.75rem;
    }

    &:hover {
      transition: all 0.5s;
      color: ${(props) => props.theme['gray-900']};
    }
  }
`;
