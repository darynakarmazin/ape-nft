import { Discord, Opensea, Twitter } from '../../img/icons/Icons';
import { MenuBtn, MenuItem, MenuList } from './BurgerMenu.styled';

function BurgerMenu() {
  return (
    <nav>
      <MenuList>
        <MenuItem>
          <MenuBtn type="button">MENU</MenuBtn>
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
    </nav>
  );
}

export default BurgerMenu;
