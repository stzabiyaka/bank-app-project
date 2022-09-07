import NavBar from '../NavBar';
import { logo, menu, close } from '../../assets';
import { Container } from '../../utilities/styles';
import { AppBarContainer } from './AppBar.styled';
import { LogoLink, LogoImg, LogoSpan } from './AppBar.styled';

const AppBar = () => {
  return (
    <Container>
      <AppBarContainer>
        <LogoLink href="#" title="Home">
          <LogoImg src={logo} />
          Hoo<LogoSpan>Bank</LogoSpan>
        </LogoLink>
        <NavBar />
      </AppBarContainer>
    </Container>
  );
};
export default AppBar;
