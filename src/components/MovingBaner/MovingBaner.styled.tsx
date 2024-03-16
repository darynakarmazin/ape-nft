import styled, { keyframes } from 'styled-components';

const moveLineAnimation = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - 24px));
  }
`;

export const BannerContainer = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: var(--accent-color);
  overflow: hidden;

  display: flex;
  user-select: none;
  gap: 24px;
`;

export const MovingLineContainer = styled.div`
  width: 200%;
`;

export const MovingLine = styled.ul`
  display: flex;
  gap: 24px;
  height: 52px;
  overflow: hidden;
  animation: ${moveLineAnimation} 15s linear infinite;

  li {
    display: flex;
    align-items: center;
    padding: 0 20px;
    color: var(--main-font-color);
    font-size: 18px;
    font-weight: bold;
    text-wrap: nowrap;
    text-transform: uppercase;
  }
`;
