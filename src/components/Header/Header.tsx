import { Logo } from '../../img/icons/Icons';
import '../../fonts/fonts.css';

function Header() {
  return (
    <header>
      <a href="/">
        <Logo />
      </a>
      <p style={{ fontFamily: 'BiroScriptPlus' }}>
        Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod{' '}
      </p>
      <p style={{ fontFamily: 'MessinaSansMono-Regular' }}>
        Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod{' '}
      </p>
      <p style={{ fontFamily: 'RightGrotesk-CompactBlack' }}>
        Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod{' '}
      </p>
    </header>
  );
}

export default Header;
