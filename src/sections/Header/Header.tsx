import { Logo } from '../../img/icons/Icons';
import '../../fonts/fonts.css';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';
import { HeaderContainer, HeaderSection, LogoLink } from './Header.styled';
import { useEffect, useState } from 'react';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 48);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HeaderSection>
      <div
        className="container"
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <HeaderContainer>
          <LogoLink href="/" aria-label="Logo link to main page">
            {!isScrolled && <Logo />}
          </LogoLink>
          <BurgerMenu isScrolled={isScrolled} />
        </HeaderContainer>
      </div>
    </HeaderSection>
  );
}

export default Header;
