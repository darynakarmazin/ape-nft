import styled from 'styled-components';

export const AboutSection = styled.section`
  width: 100%;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--main-font-color);
  padding: 0 64px;
  @media screen and (min-width: 768px) {
    padding: 0 72px;
    margin-top: 80px;
  }
  @media screen and (min-width: 1280px) {
    padding: 0 81px;
    margin-top: 120px;
  }
`;

export const AboutTitle = styled.h2`
  font-family: 'RightGrotesk-CompactBlack';
  font-size: 40px;
  font-weight: 900;
  line-height: 40px;
  letter-spacing: 0%;
  text-align: left;
  text-transform: uppercase;
  margin-bottom: 16px;
  span {
    color: var(--accent-color);
  }
  @media screen and (min-width: 768px) {
    font-size: 60px;
    line-height: 60px;
    br {
      display: none;
    }
  }
  @media screen and (min-width: 1280px) {
    font-size: 120px;
    line-height: 120px;
  }
`;

export const AboutDescription = styled.p`
  color: rgb(255, 255, 255);
  font-family: 'MessinaSansMono-Regular';
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0%;
  text-align: right;
  text-transform: uppercase;
  margin-bottom: 36px;
  text-indent: 136px;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
    font-size: 24px;
    line-height: 29px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;

  p {
    font-family: 'MessinaSansMono-Regular';
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0%;
    text-align: center;
    text-transform: uppercase;
  }

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const AboutImg = styled.picture`
img{
  display: block;
  margin: 0 auto;
}

  @media screen and (min-width: 768px) {
 
  @media screen and (min-width: 1280px) {

  }
`;
