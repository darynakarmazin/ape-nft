import MobMonkeyImg1x from '../../img/about/about-monkey-mob.png';
import MobMonkeyImg2x from '../../img/about/about-monkey-mob@2.png';
import TabMonkeyImg1x from '../../img/about/about-monkey-tab.png';
import TabMonkeyImg2x from '../../img/about/about-monkey-tab@2.png';
import DeskMonkeyImg1x from '../../img/about/about-monkey-deck.png';
import DeskMonkeyImg2x from '../../img/about/about-monkey-deck@2.png';
import { AddSharp } from '../../img/icons/Icons';
import MovingBaner from '../MovingBaner/MovingBaner';
import {
  AboutDescription,
  AboutImg,
  AboutSection,
  AboutTitle,
  IconWrapper,
} from './About.styled';

function About() {
  return (
    <AboutSection id="about">
      <div className="content-container">
        <div>
          <AboutTitle>
            a Story that started with{' '}
            <span>
              one simple <br />
              ape
            </span>
          </AboutTitle>
          <AboutDescription>
            WHO GOT FED UP WITH BORING AND HYPOCRITIC COMMONPLACE THIS IS HOW
            THE IDEA OF ESCAPING AND DYNAMIC JOURNEY ON THE YACHT
          </AboutDescription>
        </div>
        <div>
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
          </AboutImg>
        </div>
        <MovingBaner />
      </div>
    </AboutSection>
  );
}

export default About;
