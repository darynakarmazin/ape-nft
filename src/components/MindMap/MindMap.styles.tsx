import styled from 'styled-components';

export const MindMapSection = styled.section`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--main-font-color);
  padding: 30px 64px 0;
  @media screen and (min-width: 768px) {
    margin-top: 40px;
    padding: 40px 72px 0;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 60px;
    padding: 60px 84px 0 78px;
  }
`;

export const MindMapTitle = styled.h2`
  font-family: 'RightGrotesk-CompactBlack';
  font-size: 44px;
  font-weight: 900;
  line-height: 40px;
  letter-spacing: 0%;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    font-size: 80px;
    line-height: 80px;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 160px;
    line-height: 160px;
    margin-bottom: 80px;
  }
`;
