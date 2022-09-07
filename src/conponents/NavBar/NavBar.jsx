import { useState } from 'react';
import { NAV_LINKS } from '../../constatnts';
import { menu, close } from '../../assets';
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
          <MenuIcon src={close} alt="Close menu" title="Close menu" />
        ) : (
          <MenuIcon src={menu} alt="Open menu" title="Open menu" />
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
