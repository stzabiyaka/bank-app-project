import { useState } from 'react';
import { NAV_LINKS } from '../../constatnts';
import { icons } from '../../assets';
import {
  NavBarContainer,
  NavList,
  NavListItem,
  NavLink,
  MenuIcon,
  MenuButton,
} from './NavBar.styled';

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <NavBarContainer>
      <MenuButton
        onClick={() => setToggleMenu(state => !state)}
        aria-label="Toggle navigation menu"
      >
        {toggleMenu ? (
          <MenuIcon aria-label="Close menu">
            <use href={`${icons}#icon-close`} />
          </MenuIcon>
        ) : (
          <MenuIcon aria-label="Open menu">
            <use href={`${icons}#icon-menu`} />
          </MenuIcon>
        )}
      </MenuButton>
      <NavList className={toggleMenu ? '' : 'hidden'}>
        {NAV_LINKS.map(element => (
          <NavListItem key={element.id}>
            <NavLink href={`#${element.id}`}>{element.title}</NavLink>
          </NavListItem>
        ))}
      </NavList>
    </NavBarContainer>
  );
};
export default NavBar;
