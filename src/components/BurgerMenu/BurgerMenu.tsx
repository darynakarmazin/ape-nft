import { Discord, Opensea, Twitter } from '../../img/icons/Icons';

function BurgerMenu() {
  return (
    <nav>
      <ul>
        <li>
          <button type="button">MENU</button>
        </li>
        <li>
          <a
            href="https://discord.com/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label="a link to the company's Discord page"
          >
            <Discord />
          </a>
        </li>
        <li>
          <a
            href="https://opensea.io/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label="a link to the company's Opensea page"
          >
            <Opensea />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label="a link to the company's Twitter page"
          >
            <Twitter />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default BurgerMenu;
