import styled from 'styled-components';

export const SeparatorStatsFollowers = styled.div`
  background: ${(props) => props.theme['gray-300']};
  height: 4rem;
  width: 1px;
`;

export const SidebarProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  background: ${(props) => props.theme['white']};
  width: 356px;
  height: 27rem;
  border-radius: 8px;
  overflow: hidden;
  & > img {
    width: 100%;
    height: 100px;
    object-fit: cover;
  }

  div {
    img {
      margin-top: calc(0px - 1.8rem - 6px);
    }
  }

  strong {
    margin-top: 1rem;
    color: ${(props) => props.theme['gray-900']};
    line-height: 1.6;
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['gray-900']};
    line-height: 1.6;
  }

  p {
    margin-top: 0.35rem;
    text-align: center;
    font-size: 0.875rem;
    padding: 0 1.3rem;
    line-height: 1.4;
  }

  footer {
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  footer {
    a {
      background: transparent;
      color: ${(props) => props.theme['purple-500']};
      outline: 2px solid ${(props) => props.theme['purple-500']};
      border-radius: 8px;
      height: 50px;
      width: 90%;
      padding: 0 1rem;

      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      font-size: 0.875rem;
      font-weight: bold;

      gap: 0.5rem;
    }
    a:hover {
      background: ${(props) => props.theme['purple-500']};
      color: ${(props) => props.theme['white']};
      transition: all 0.3s;
    }
  }
`;

export const SidebarProfileStatsFollowers = styled.div`
  display: flex;
  padding: 1rem 0;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;

  span {
    font-weight: bold;
    font-size: 1.1rem;
    margin-bottom: 0.275rem;
  }

  p {
    font-size: 0.9rem;
    font-weight: 400;
    color: ${(props) => props.theme['gray-900']};
  }

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
