import styled from 'styled-components';

export const SwiperArea = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const ControllersWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 48px;
  margin-top: 24px;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const SwiperBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  color: var(--main-font-color);
  font-family: 'BiroScript-PlusBold';
  font-size: 24px;
  font-weight: 400;
  line-height: 24px;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;
