import styled from 'styled-components';

export const MobileMenuBtn = styled.button`
  display: none;
  @media screen and (max-width: 767px) {
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
`;

export const Backdrop = styled.div`
  display: none;
  @media screen and (max-width: 767px) {
    display: block;
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--main-background-color);
    opacity: 1;
    transition: all var(--transition-dur-and-func);
  }
`;

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: scale(1) translate(-50%, -50%);
  padding-top: 54px;
  height: 100vh;
  transition: all var(--transition-dur-and-func);
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  width: 100%;
  height: 100%;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  a {
    svg {
      path {
        fill: var(--main-font-color);
      }
    }
  }
`;

export const ModalList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ModalItem = styled.li`
  color: var(--main-font-color);
  font-family: 'MessinaSansMono-Regular';
  font-size: 24px;
  font-weight: 600;
  line-height: 1.2;
  text-align: center;
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const MenuItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 8px;
  backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  a {
    svg {
      width: 16px;
      height: 16px;
      path {
        fill: var(--main-font-color);
      }
    }
  }
`;

export const BottomPart = styled.div`
  margin-top: auto;
`;
