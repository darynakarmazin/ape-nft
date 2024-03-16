import { Logo } from '../../img/icons/Icons';
import '../../fonts/fonts.css';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { HeaderContainer, HeaderSection, LogoLink } from './Header.styled';

function Header() {
  return (
    <HeaderSection>
      <div
        className="container"
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <HeaderContainer>
          <LogoLink href="/" aria-label="Logo link to main page">
            <Logo />
          </LogoLink>
          <BurgerMenu />
        </HeaderContainer>
      </div>
    </HeaderSection>
  );
}

export default Header;
