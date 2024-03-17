import styled from 'styled-components';

export const GridContainer = styled.ul`
  display: none;
  @media screen and (min-width: 768px) {
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(2, 284px);
  }
  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(2, 504px);
  }
`;

export const Card = styled.li`
  padding: 24px 12px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--secondary-background-color);
  color: var(--main-font-color);
  height: 242px;

  a {
    background-color: var(--accent-color);
  }
  @media screen and (min-width: 768px) {
    padding: 24px;
    border-radius: 16px;
  }
  @media screen and (min-width: 1280px) {
    height: 480px;
  }
`;

export const LinkCard = styled.li`
  padding: 24px 12px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: var(--accent-color);
  color: var(--main-font-color);
  height: 242px;
  position: relative;
  &:hover svg,
  &:focus svg {
    top: 0;
    right: 0;
  }

  a {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
  }

  svg {
    position: absolute;
    top: 12px;
    right: 12px;
    margin-left: auto;
    width: 48px;
    height: 48px;
    transition: all var(--transition-dur-and-func);
  }

  @media screen and (min-width: 768px) {
    padding: 24px;
    border-radius: 16px;
  }

  @media screen and (min-width: 1280px) {
    height: 480px;
    svg {
      margin-left: auto;
      width: 64px;
      height: 64px;
    }
  }
`;

export const CardTitle = styled.h2`
  font-family: 'RightGrotesk-CompactBlack';
  font-size: 32px;
  font-weight: 900;
  line-height: 32px;
  letter-spacing: 0%;
  text-align: left;
  text-transform: uppercase;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
    font-size: 64px;
    line-height: 64px;
  }
`;

export const CardText = styled.p`
  font-family: 'MessinaSansMono-Regular';
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0%;
  text-align: left;
  text-transform: uppercase;
  @media screen and (min-width: 768px) {
    margin-left: auto;
    width: 128px;
  }
  @media screen and (min-width: 1280px) {
    width: 228px;
    font-size: 24px;
    line-height: 29px;
  }
`;
