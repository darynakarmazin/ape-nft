import styled from 'styled-components';
import '../../fonts/fonts.css';

export const HeroSection = styled.section`
  margin-top: 54px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--accent-color);
  color: var(--secondary-font-color);
  border-radius: 12px;
  padding: 36px 64px 19px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const HeroTitle = styled.h1`
  font-family: 'RightGrotesk-CompactBlack';
  font-size: 44px;
  font-weight: 900;
  line-height: 44px;
  letter-spacing: 1%;
  margin-bottom: 8px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const HeroQuestion = styled.p`
  font-family: 'BiroScript-PlusBold';
  font-size: 16px;
  font-weight: 400;
  line-height: 27px;
  margin-bottom: 6px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const HeroPicture = styled.picture`
  margin-bottom: -8px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const HeroBtn = styled.a`
  width: 216px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 70px 12px;
  border-radius: 8px;
  backdrop-filter: blur(12px);
  background: rgba(30, 30, 30, 0.1);
  color: var(--secondary-font-color);
  font-family: 'RightGrotesk-CompactBlack';
  font-size: 16px;
  font-weight: 900;
  line-height: 19px;
  margin-bottom: 12px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const HeroDescription = styled.p`
  font-family: 'MessinaSansMono-Regular';
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0%;
  text-align: center;
  text-transform: uppercase;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;
