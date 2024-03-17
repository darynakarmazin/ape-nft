import MobMonkeyImg1x from '../../img/hero/hero-monkey-mob.png';
import MobMonkeyImg2x from '../../img/hero/hero-monkey-mob@2.png';
import TabMonkeyImg1x from '../../img/hero/hero-monkey-tab.png';
import TabMonkeyImg2x from '../../img/hero/hero-monkey-tab@2.png';
import DeskMonkeyImg1x from '../../img/hero/hero-monkey-desk.png';
import DeskMonkeyImg2x from '../../img/hero/hero-monkey-deck@2.png';
import {
  DeckWrapper,
  HeroBtn,
  HeroDescription,
  HeroPicture,
  HeroQuestion,
  HeroSection,
  HeroTitle,
  TextWrapper,
} from './Hero.styled';

function Hero() {
  return (
    <HeroSection>
      <div className="content-container">
        <HeroQuestion>diD yOu seE iT ?</HeroQuestion>
        <HeroTitle>YACHT APES</HeroTitle>
        <TextWrapper>
          <HeroQuestion>Apes aRe eveRywhere</HeroQuestion>
          <HeroPicture>
            <source
              media="(min-width: 1280px)"
              srcSet={`
          ${DeskMonkeyImg1x} 1x,
          ${DeskMonkeyImg2x} 2x
        `}
              width="463"
              height="612"
            />
            <source
              media="(min-width: 768px)"
              srcSet={`
          ${TabMonkeyImg1x} 1x,
          ${TabMonkeyImg2x} 2x
        `}
              width="283"
              height="386"
            />
            <source
              media="(max-width: 767px)"
              srcSet={`
          ${MobMonkeyImg1x} 1x,
          ${MobMonkeyImg2x} 2x
        `}
            />
            <img src={DeskMonkeyImg1x} alt="monkey wearing glasses" />
          </HeroPicture>
          <DeckWrapper>
            <HeroBtn href="#mint">MEET APES</HeroBtn>
            <HeroDescription>
              Yacht Ape is a collection of unique digital apes that you can own
              in NFT format
            </HeroDescription>
          </DeckWrapper>
        </TextWrapper>
      </div>
    </HeroSection>
  );
}

export default Hero;
