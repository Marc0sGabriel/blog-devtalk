import { Bell } from 'phosphor-react';
import { HeaderContainer, LogoContainer } from './styles';
import blogLogo from '/images/logo.svg';

export function Header() {
  return (
    <HeaderContainer>
      <strong> </strong>
      <LogoContainer>
        <img src={blogLogo} alt="logo do blog" />
        <strong>DevTalk</strong>
      </LogoContainer>
      <nav>
        <Bell size={25} />

        <img
          src="https://github.com/Marc0sGabriel.png"
          alt="foto de perfil usuário"
        />
      </nav>
    </HeaderContainer>
  );
}
