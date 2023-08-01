import { Avatar } from '../Avatar';

import {
  BookmarkSimple,
  Globe,
  HouseSimple,
  MagnifyingGlass,
  PencilSimple,
} from 'phosphor-react';

import {
  NewTopicsContainer,
  SeparatorStatsFollowers,
  SidebarContainer,
  SidebarProfileContainer,
  SidebarProfileStatsFollowers,
} from './styles';

export function Sidebar() {
  return (
    <SidebarContainer>
      <nav>
        <a href="#">
          <HouseSimple size={25} />
          <span>Home</span>
        </a>
        <a href="#">
          <BookmarkSimple size={25} />
          <span>Saved</span>
        </a>
        <a href="#">
          <Globe size={25} />
          <span>Discover</span>
        </a>
        <a href="#">
          <MagnifyingGlass size={25} />
          <span>Search</span>
        </a>
      </nav>

      <SidebarProfileContainer>
        <img
          className=".cover"
          src="https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
        />
        <div>
          <Avatar
            src="https://github.com/Marc0sGabriel.png"
            alt={'foto de perfil usuario'}
          />
        </div>

        <strong>Marcos Gabriel</strong>
        <span>Software Engineer | Meta</span>

        <p>✨ Adepto da experiência do usuário e defensor da usabilidade.</p>

        <SidebarProfileStatsFollowers>
          <div>
            <p>Seguidores</p>
            <span>1,243</span>
          </div>
          <SeparatorStatsFollowers />
          <div>
            <p>Seguindo</p>
            <span>527</span>
          </div>
        </SidebarProfileStatsFollowers>

        <footer>
          <a href="#">
            <PencilSimple size={20} />
            Editar seu perfil
          </a>
        </footer>
      </SidebarProfileContainer>

      <NewTopicsContainer>
        <h2>Discover</h2>
        <h4>help • discuss</h4>
        <a href="#">
          <p>What do you find difficult about SQL and Databases?</p>
          <span>20 comments</span>
        </a>

        <a href="#">
          <p>How's your 2023 going?</p>
          <span>45 comments</span>
        </a>

        <a href="#">
          <p>What's your personal development plan?</p>
          <span>12 comments</span>
        </a>
      </NewTopicsContainer>
    </SidebarContainer>
  );
}
