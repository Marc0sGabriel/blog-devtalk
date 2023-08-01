import { PencilSimple } from 'phosphor-react';
import { Avatar } from '../../../Avatar';
import {
  SeparatorStatsFollowers,
  SidebarProfileContainer,
  SidebarProfileStatsFollowers,
} from './styles';

export function ProfileUserCard() {
  return (
    <>
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
    </>
  );
}
