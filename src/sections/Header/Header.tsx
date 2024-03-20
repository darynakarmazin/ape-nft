import scrollLock from 'scroll-lock';
import { Logo } from '../../img/icons/Icons';
import '../../fonts/fonts.css';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';
import { HeaderContainer, HeaderSection, LogoLink } from './Header.styled';
import { useEffect, useState } from 'react';
import MobileMenu from '../../components/MobileMenu/MobileMenu';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const handleModalOpen = () => {
    setIsMobileMenuOpen(true);
    scrollLock.disablePageScroll(document.body);
  };

  return (
    <>
      <HeaderSection>
        <div
          className="container"
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <HeaderContainer>
            <LogoLink href="/ape-nft" aria-label="Logo link to main page">
              {!isScrolled && <Logo />}
            </LogoLink>
            <BurgerMenu
              isScrolled={isScrolled}
              handleModalOpen={handleModalOpen}
            />
          </HeaderContainer>
        </div>
      </HeaderSection>
      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
    </>
  );
}

export default Header;
