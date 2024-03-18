import { useState } from 'react';
import { Discord, Opensea, Twitter } from '../../img/icons/Icons';
import {
  MenuBtn,
  MenuItem,
  MenuList,
  MobileMenu,
  NavMenu,
  SocialItem,
  SocialList,
} from './BurgerMenu.styled';

interface Props {
  isScrolled: boolean;
}

function BurgerMenu({ isScrolled }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <NavMenu $scroll={isScrolled ? 'true' : 'false'}>
      {isMenuOpen && (
        <SocialList>
          <SocialItem>
            <a href="#about" aria-label="link scroll to the About section">
              ABOUT
            </a>
          </SocialItem>
          <SocialItem>
            <a href="#m-map" aria-label="link scroll to the M-map section">
              M-MAP
            </a>
          </SocialItem>
          <SocialItem>
            <a href="#faq" aria-label="link scroll to the FAQ section">
              FAQ
            </a>
          </SocialItem>
          <SocialItem>
            <a href="#arts" aria-label="link scroll to the Arts section">
              ARTS
            </a>
          </SocialItem>
          <SocialItem>
            <a href="#mint" aria-label="link scroll to the Mint section">
              MINT
            </a>
          </SocialItem>
        </SocialList>
      )}

      <MenuList>
        <MenuItem
          style={{
            borderTopLeftRadius: isMenuOpen ? '0' : '8px',
            borderBottomLeftRadius: isMenuOpen ? '0' : '8px',
          }}
        >
          <MobileMenu type="button">MENU</MobileMenu>
          <MenuBtn type="button" onClick={handleMenuToggle}>
            {isMenuOpen ? 'CLOSE' : ' MENU'}
          </MenuBtn>
        </MenuItem>
        <MenuItem>
          <a
            href="https://discord.com/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label="a link to the company's Discord page"
          >
            <Discord />
          </a>
        </MenuItem>
        <MenuItem>
          <a
            href="https://opensea.io/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label="a link to the company's Opensea page"
          >
            <Opensea />
          </a>
        </MenuItem>
        <MenuItem>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label="a link to the company's Twitter page"
          >
            <Twitter />
          </a>
        </MenuItem>
      </MenuList>
    </NavMenu>
  );
}

export default BurgerMenu;
