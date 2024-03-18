import MobMonkeyImg1x from '../../img/about/about-monkey-mob.png';
import MobMonkeyImg2x from '../../img/about/about-monkey-mob@2.png';
import TabMonkeyImg1x from '../../img/about/about-monkey-tab.png';
import TabMonkeyImg2x from '../../img/about/about-monkey-tab@2.png';
import DeskMonkeyImg1x from '../../img/about/about-monkey-deck.png';
import DeskMonkeyImg2x from '../../img/about/about-monkey-deck@2.png';
import MovingBaner from '../../components/MovingBaner/MovingBaner';
import { ContentContainer } from '../../components/ContentContainer/ContentContainer.styles';
import { AddSharp } from '../../img/icons/Icons';
import {
  AboutDescription,
  AboutImg,
  AboutSection,
  AboutTitle,
  IconWrapper,
  SecondPartWrapper,
  TitleWrapper,
} from './About.styled';

function About() {
  return (
    <AboutSection id="about">
      <ContentContainer>
        <TitleWrapper>
          <AboutTitle>
            a Story that started with{' '}
            <span>
              one simple <br />
              ape
            </span>
          </AboutTitle>
          <AboutDescription>
            WHO GOT FED UP WITH BORING AND HYPOCRITIC COMMONPLACE THIS IS HOW
            THE IDEA OF ESCAPING AND DYNAMIC JOURNEY ON THE <br />
            YACHT
          </AboutDescription>
        </TitleWrapper>
        <SecondPartWrapper>
          <IconWrapper>
            <AddSharp />
            <p>
              EACH ARTWORK IN THE COLLECTION TELLS A STORY OF ONE JOURNEY. ARTS
              ARE RANDOMLY GENERATED BY USERS
            </p>
          </IconWrapper>
          <AboutImg>
            <source
              media="(min-width: 1280px)"
              srcSet={`
          ${DeskMonkeyImg1x} 1x,
          ${DeskMonkeyImg2x} 2x
        `}
              width="492"
              height="662"
            />
            <source
              media="(min-width: 768px)"
              srcSet={`
          ${TabMonkeyImg1x} 1x,
          ${TabMonkeyImg2x} 2x
        `}
              width="313"
              height="422"
            />
            <source
              media="(max-width: 767px)"
              srcSet={`
          ${MobMonkeyImg1x} 1x,
          ${MobMonkeyImg2x} 2x
        `}
            />
            <img
              src={DeskMonkeyImg1x}
              alt="monkey wearing glasses"
              loading="lazy"
            />
          </AboutImg>
        </SecondPartWrapper>
        <MovingBaner />
      </ContentContainer>
    </AboutSection>
  );
}

export default About;
