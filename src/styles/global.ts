import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 :root {
  color-scheme: light dark;

  --white: #fff;
  --gray-100: #e1e1e6;
  --gray-300: #c4c4cc;
  --gray-400: #8d8d99;
  --gray-500: #7b7b8b;
  --gray-600: rgba(50, 50, 56, 0.7);
  --gray-700: #37373d;
  --gray-800: rgba(35, 35, 39, 0.8);
  --gray-900: #121214;

  --green-300: #00b37e;
  --green-500: #00875f;

  --blue-900: #9b9faa;
  --purple-500: rgb(149, 51, 206);
  --purple-700: rgb(140, 43, 197);

  --red-500: #f75a68;
}

::selection {
  background-color: var(--green-300);
  color: white;
}

:focus {
  outline: transparent;
  box-shadow: 0 0 0 2px var(--green-300);
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
