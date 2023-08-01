import {
  BookmarkSimple,
  Globe,
  HouseSimple,
  MagnifyingGlass,
} from 'phosphor-react';

import { NewTopicsContainer, SidebarContainer } from './styles';
import { ProfileUserCard } from './components/ProfileUserCard';

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

      <ProfileUserCard />
    </SidebarContainer>
  );
}
