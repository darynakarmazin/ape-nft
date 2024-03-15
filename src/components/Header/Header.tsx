import { Logo } from '../../img/icons/Icons';
import '../../fonts/fonts.css';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { HeaderContainer, HeaderSection } from './Header.styled';

function Header() {
  return (
    <HeaderSection>
      <div className="container">
        <HeaderContainer>
          <a href="/" aria-label="Logo link to main page">
            <Logo />
          </a>
          <BurgerMenu />
        </HeaderContainer>
      </div>
    </HeaderSection>
  );
}

export default Header;
