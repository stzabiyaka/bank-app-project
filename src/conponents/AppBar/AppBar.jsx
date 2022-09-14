import NavBar from '../NavBar';
import { icons } from '../../assets';
import { NAV_LINKS } from '../../constatnts';
import { Header } from './AppBar.styled';
import { AppBarContainer, LogoLink, LogoIcon, LogoSpan } from './AppBar.styled';

const AppBar = () => {
  const ref = NAV_LINKS[0];
  return (
    <Header>
      <AppBarContainer>
        <LogoLink href={`#${ref.id}`} title={ref.title}>
          <LogoIcon aria-label="HooBank logo">
            <use href={`${icons}#icon-logo`} />
          </LogoIcon>
          Hoo<LogoSpan>Bank</LogoSpan>
        </LogoLink>
        <NavBar />
      </AppBarContainer>
    </Header>
  );
};
export default AppBar;
