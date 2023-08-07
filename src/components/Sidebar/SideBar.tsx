import {
  BookmarkSimple,
  Globe,
  HouseSimple,
  MagnifyingGlass,
} from 'phosphor-react';

import { NewTopicsContainer, SidebarContainer } from './styles';
import { ProfileUserCard } from './components/ProfileUserCard';
import { NavLink } from 'react-router-dom';

export function Sidebar() {
  return (
    <SidebarContainer>
      <nav>
        <NavLink
          to="/"
          className={(isActive) => (isActive ? 'active' : 'inactive')}
        >
          <HouseSimple size={25} />
          <span>Inicio</span>
        </NavLink>

        <NavLink to="#">
          <BookmarkSimple size={25} />
          <span>Salvos</span>
        </NavLink>

        <NavLink to="#">
          <Globe size={25} />
          <span>Explorar</span>
        </NavLink>

        <NavLink to="#">
          <MagnifyingGlass size={25} />
          <span>Pesquisar</span>
        </NavLink>
      </nav>

      <NewTopicsContainer>
        <h2>Explore</h2>
        <h4>Contribua • Discute</h4>
        <NavLink to="#">
          <p>Qual sua dificuldade em bancos de dados?</p>
          <span>20 comments</span>
        </NavLink>

        <NavLink to="#">
          <p>Como está sendo o seu ano?</p>
          <span>45 comments</span>
        </NavLink>

        <NavLink to="#">
          <p>Qual framework javascript recomendam?</p>
          <span>12 comments</span>
        </NavLink>
      </NewTopicsContainer>

      <ProfileUserCard />
    </SidebarContainer>
  );
}
