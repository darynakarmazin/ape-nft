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
  padding-top: 70px;
  padding-bottom: 24px;
  height: 100vh;
  transition: all var(--transition-dur-and-func);
`;

export const ModalContent = styled.div`
  padding: 0 8px;
  width: 100%;
  height: 100%;
  border-radius: 25px;
  background: red;
`;

export const ButtonClose = styled.button`
  display: flex;
  gap: 4px;
  align-items: center;
  color: #fff;
  background: transparent;
  border: none;
  font-family: var(--main-font);
  font-size: 20px;
  letter-spacing: -0.8px;
`;

export const ModalList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ModalItem = styled.li`
  color: rgba(255, 255, 255, 0.25);
  font-family: var(--main-font);
  font-size: 24px;
  letter-spacing: -0.96px;
  a {
    div {
      display: flex;
      gap: 8px;
    }
  }
  svg path {
    stroke: rgba(255, 255, 255, 0.25);
  }

  .active {
    color: var(--hover-items-color);
    svg path {
      stroke: var(--hover-items-color);
    }
  }

  &:hover {
    a {
      color: #fff;
      svg path {
        stroke: #fff;
      }
    }
  }
`;
