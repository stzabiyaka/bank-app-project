import NavBar from '../NavBar';
import { icons } from '../../assets';
import { NAV_LINKS } from '../../constatnts';
import { Container } from '../../utilities/styles';
import { AppBarContainer } from './AppBar.styled';
import { LogoLink, LogoIcon, LogoSpan } from './AppBar.styled';

const AppBar = () => {
  const ref = NAV_LINKS[0];
  return (
    <Container>
      <AppBarContainer>
        <LogoLink href={`#${ref.id}`} title={ref.title}>
          <LogoIcon aria-label="HooBank logo">
            <use href={`${icons}#icon-logo`} />
          </LogoIcon>
          Hoo<LogoSpan>Bank</LogoSpan>
        </LogoLink>
        <NavBar />
      </AppBarContainer>
    </Container>
  );
};
export default AppBar;
