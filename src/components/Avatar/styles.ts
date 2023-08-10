import styled, { css } from 'styled-components';

export const AvatarContainer = styled.img<{ $inputColor?: boolean }>`
  ${(props) => {
    return props.$inputColor
      ? css`
          box-sizing: initial;
          width: 3rem;
          height: 3rem;
          border-radius: 8px;
          outline: 3.5px solid ${(props) => props.theme['purple-500']};
        `
      : css`
          box-sizing: initial;
          width: 3rem;
          height: 3rem;
          border-radius: 8px;
        `;
  }}
`;
