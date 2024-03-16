import styled from 'styled-components';

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    gap: 16px;
  }
`;

export const MenuItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 8px;
  backdrop-filter: blur(12px);
  background: rgba(30, 30, 30, 0.1);
  cursor: pointer;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
    svg {
      width: 16px;
      height: 16px;
      path {
        transition: fill var(--transition-dur-and-func);
      }
    }
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    width: 80px;
    height: 80px;
    border-radius: 12px;

    a {
      padding: 28px;
      svg {
        width: 24px;
        height: 24px;
      }
    }
  }
`;

export const MenuBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 8px;
  background: transparent;
  border: none;
  color: inherit;
  font-family: 'MessinaSansMono-Regular';
  font-size: 12px;
  font-weight: 600;
  line-height: 14px;
  letter-spacing: 0%;
  cursor: pointer;
  transition: all var(--transition-dur-and-func);
  &:hover,
  &:focus {
    color: inherit;
    text-decoration: underline;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 19px;
  }
`;

export const SocialList = styled.ul`
  display: flex;
  transition: all var(--transition-dur-and-func);

  li:first-child {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const SocialItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  backdrop-filter: blur(12px);
  background: rgba(30, 30, 30, 0.1);
  cursor: pointer;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    border-radius: 8px;
    background: transparent;
    border: none;
    color: inferit;
    font-family: 'MessinaSansMono-Regular';
    font-size: 12px;
    font-weight: 600;
    line-height: 14px;
    letter-spacing: 0%;
    cursor: pointer;
    transition: all var(--transition-dur-and-func);
    &:hover,
    &:focus {
      color: inherit;
      text-decoration: underline;
    }
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    width: 80px;
    height: 80px;
    a {
      width: 80px;
      height: 80px;
      font-size: 16px;
      line-height: 19px;
    }
  }
`;

export const NavMenu = styled.nav<{ isScrolled: boolean }>`
  display: flex;
  color: ${({ isScrolled }) =>
    isScrolled ? 'var(--main-font-color)' : 'var(--secondary-font-color)'};
  a {
    svg {
      path {
        fill: ${({ isScrolled }) =>
          isScrolled
            ? 'var(--main-font-color)'
            : 'var(--secondary-font-color)'};
      }
    }
    &:hover path,
    &:focus path {
      fill: ${({ isScrolled }) =>
        isScrolled ? 'var(--accent-color)' : 'var(--main-font-color)'};
    }
  }

  a,
  button {
    &:hover,
    &:focus {
      color: ${({ isScrolled }) =>
        isScrolled ? 'var(--accent-color)' : 'var(--main-font-color)'};
    }
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;
