import styled from 'styled-components';

export const MindMapSection = styled.section`
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
    padding: 0 84px 0 78px;
    margin-top: 120px;
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
  }
  @media screen and (min-width: 1280px) {
  }
`;
