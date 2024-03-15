import styled from 'styled-components';

export const HeaderSection = styled.section`
  position: absolute;
  top: 54px;
  left: 0;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const HeaderContainer = styled.div`
  padding: 8px;
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    padding: 12px;
  }

  @media screen and (min-width: 1280px) {
    padding: 24px 96px;
  }
`;

export const LogoLink = styled.a`
  padding: 8px 0;
  svg {
    width: 48px;
    height: 32px;
    path {
      fill: var(--secondary-font-color);
      transition: fill var(--transition-dur-and-func);
    }
    &:hover path,
    &:focus path {
      fill: var(--main-font-color);
    }
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    padding: 15px 0;
    svg {
      width: 72px;
      height: 50px;
    }
  }
`;
