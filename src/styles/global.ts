import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

::selection {
  background-color: ${(props) => props.theme['purple-500']};
  color: white;
}

:focus {
  outline: transparent;
  box-shadow: 0 0 0 2px ${(props) => props.theme['green-400']};
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

a {
  color: ${(props) => props.theme['gray-600']};
  text-decoration: none;
}

body {
  background-color: ${(props) => props.theme['gray-100']};
  color: ${(props) => props.theme['gray-900']};
}

body,
input,
textarea,
button {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
}

`;
