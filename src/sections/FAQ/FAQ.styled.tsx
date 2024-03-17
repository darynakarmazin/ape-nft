import styled from 'styled-components';

export const FaqSection = styled.section`
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

export const FaqTitle = styled.h2`
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

export const FaqList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media screen and (min-width: 768px) {
    gap: 18px;
  }
  @media screen and (min-width: 1280px) {
    gap: 24px;
  }
`;

export const FaqListItem = styled.li`
  display: flex;
  gap: 8px;
  align-items: flex-start;
  justify-content: center;
  @media screen and (min-width: 768px) {
    gap: 24px;
  }
  @media screen and (min-width: 1280px) {
    gap: 31px;
  }
`;

export const FaqButton = styled.button`
  border: none;
  background: transparent;
  color: var(--accent-color);
  font-family: 'BiroScript-PlusBold';
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0%;
  text-wrap: nowrap;
  width: 23px;
  height: 20px;
  @media screen and (min-width: 768px) {
    width: 30px;
    height: 27px;
  }
  @media screen and (min-width: 1280px) {
    width: 45px;
    height: 40px;
  }
`;

export const FaqQuestionWrapper = styled.div`
  display: flex;
  width: 169px;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    gap: 24px;
  }
`;

export const FaqQuestion = styled.p`
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const FaqAnsver = styled.p`
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;
