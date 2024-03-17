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
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  @media screen and (min-width: 768px) {
    gap: 18px;
  }
  @media screen and (min-width: 1280px) {
    gap: 24px;
  }
`;

export const FaqListItem = styled.li<{ $active: string }>`
  display: flex;
  gap: 8px;
  align-items: flex-start;
  justify-content: center;
  padding: 8px;
  border-radius: 12px;
  width: 100%;
  background-color: ${({ $active }) =>
    $active === 'active' ? 'var(--secondary-background-color)' : 'transparent'};
  &:hover h3,
  &:focus h3 {
    color: var(--accent-color);
  }
  h3 {
    color: ${({ $active }) =>
      $active === 'active' ? 'var(--accent-color)' : 'var(--main-font-color)'};
  }

  @media screen and (min-width: 768px) {
    position: relative;
    justify-content: flex-end;
    gap: 24px;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const FaqImg = styled.img<{ $active: string }>`
  display: none;
  @media screen and (min-width: 768px) {
    position: absolute;
    left: 20px;
    top: -10px;
    display: ${({ $active }) => ($active === 'active' ? 'block' : 'none')};
    width: 148px;
    height: 183px;
    transform: rotate(-16deg);
  }
  @media screen and (min-width: 1280px) {
    width: 248px;
    height: 282px;
    transform: rotate(-8deg);
  }
`;

export const FaqButton = styled.button<{ $active: string }>`
  border: none;
  background: transparent;
  margin-top: 4px;
  color: ${({ $active }) =>
    $active === 'active' ? 'var(--main-font-color)' : 'var(--accent-color)'};
  font-family: 'BiroScript-PlusBold';
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0%;
  text-wrap: nowrap;
  width: 23px;
  height: 20px;
  @media screen and (min-width: 768px) {
    margin-top: 8px;
    font-size: 16px;
    line-height: 27px;
    width: 30px;
    height: 27px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 12px;
    font-size: 24px;
    line-height: 40px;
    width: 45px;
    height: 40px;
  }
`;

export const FaqQuestionWrapper = styled.div`
  display: flex;
  min-width: 169px;
  flex-direction: column;
  gap: 10px;
  @media screen and (min-width: 768px) {
    width: 339px;
  }
  @media screen and (min-width: 1280px) {
    width: 635px;
    gap: 24px;
  }
`;

export const FaqQuestion = styled.h3`
  cursor: pointer;
  color: var(--main-font-color);
  font-family: 'RightGrotesk-CompactBlack';
  font-size: 20px;
  font-weight: 900;
  line-height: 20px;
  letter-spacing: 0%;
  text-align: left;
  text-transform: uppercase;
  transition: all var(--transition-dur-and-func);
  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 32px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 64px;
    line-height: 64px;
  }
`;

export const FaqAnsver = styled.p`
  font-family: 'MessinaSansMono-Regular';
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0%;
  text-align: left;
  text-transform: uppercase;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;
