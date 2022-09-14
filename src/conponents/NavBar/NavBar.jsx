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
  const buttonTitle = toggleMenu ? 'Close menu' : 'Open menu';
  const iconHref = toggleMenu ? `${icons}#icon-close` : `${icons}#icon-menu`;
  return (
    <NavBarContainer>
      <MenuButton
        onClick={() => setToggleMenu(state => !state)}
        aria-label={buttonTitle}
        title={buttonTitle}
      >
        <MenuIcon aria-label={buttonTitle}>
          <use href={iconHref} />
        </MenuIcon>
      </MenuButton>
      <NavList className={toggleMenu ? '' : 'hidden'}>
        {NAV_LINKS.map(({ id, title }) => (
          <NavListItem key={id}>
            <NavLink href={`#${id}`}>{title}</NavLink>
          </NavListItem>
        ))}
      </NavList>
    </NavBarContainer>
  );
};
export default NavBar;
