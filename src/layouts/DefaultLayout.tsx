import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar/SideBar';
import { Wrapper } from './styles';
import { Header } from '../components/Header/Header';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/global';
import { defaultTheme } from '../styles/themes/default';

export function Default() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Header />
        <Wrapper>
          <Sidebar />
          <Outlet />
        </Wrapper>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}
