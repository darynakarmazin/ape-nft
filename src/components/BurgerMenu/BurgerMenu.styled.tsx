import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const MenuList = styled.ul<{ $isOpen: string }>`
  pointer-events: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
  > li:first-child {
    border-top-left-radius: ${({ $isOpen }) =>
      $isOpen === 'open' ? '0' : '8px'};
    border-bottom-left-radius: ${({ $isOpen }) =>
      $isOpen === 'open' ? '0' : '8px'};
  }
  @media screen and (min-width: 1280px) {
    gap: 16px;
    > li:first-child {
      border-top-left-radius: ${({ $isOpen }) =>
        $isOpen === 'open' ? '0' : '12px'};
      border-bottom-left-radius: ${({ $isOpen }) =>
        $isOpen === 'open' ? '0' : '12px'};
    }
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
  display: none;
  @media screen and (min-width: 768px) {
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
    line-height: 1.17;
    cursor: pointer;
    transition: all var(--transition-dur-and-func);
    &:hover,
    &:focus {
      color: inherit;
      text-decoration: underline;
    }
  }
  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 1.19;
  }
`;

export const BurgerList = styled.ul<{ $isOpen: string }>`
  display: none;
  @media screen and (min-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen === 'open' ? 'flex' : 'none')};
    transition: all var(--transition-dur-and-func);
    li:first-child {
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }
    opacity: ${({ $isOpen }) => ($isOpen === 'open' ? '1' : '0')};
    animation: ${({ $isOpen }) => ($isOpen === 'open' ? fadeIn : fadeOut)} 0.8s
      ease forwards;
    visibility: ${({ $isOpen }) => ($isOpen === 'open' ? 'visible' : 'hidden')};
  }
`;

export const BurgerItem = styled.li`
  pointer-events: auto;
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
    line-height: 1.17;
    cursor: pointer;
    transition: all var(--transition-dur-and-func);
    &:hover,
    &:focus {
      color: inherit;
      text-decoration: underline;
    }
  }
  @media screen and (min-width: 1280px) {
    width: 80px;
    height: 80px;
    a {
      width: 80px;
      height: 80px;
      font-size: 16px;
      line-height: 1.19;
    }
  }
`;

export const NavMenu = styled.nav<{ $scroll: string }>`
  display: flex;
  color: ${({ $scroll }) =>
    $scroll === 'true'
      ? 'var(--main-font-color)'
      : 'var(--secondary-font-color)'};
  a {
    svg {
      path {
        fill: ${({ $scroll }) =>
          $scroll === 'true'
            ? 'var(--main-font-color)'
            : 'var(--secondary-font-color)'};
      }
    }
    &:hover path,
    &:focus path {
      fill: ${({ $scroll }) =>
        $scroll === 'true' ? 'var(--accent-color)' : 'var(--main-font-color)'};
    }
  }

  a,
  button {
    &:hover,
    &:focus {
      color: ${({ $scroll }) =>
        $scroll === 'true' ? 'var(--accent-color)' : 'var(--main-font-color)'};
    }
  }
  li {
    background: ${({ $scroll }) =>
      $scroll === 'true'
        ? 'rgba(255, 255, 255, 0.1)'
        : 'rgba(30, 30, 30, 0.1)'};
    }
  }
`;
