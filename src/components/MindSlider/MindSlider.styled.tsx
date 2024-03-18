import styled from 'styled-components';

export const SwiperArea = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const ControllersWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 48px;
  margin-top: 24px;
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
  line-height: 1;
`;
