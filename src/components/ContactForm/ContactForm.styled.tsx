import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  min-width: 216px;
  width: 100%;
  max-width: 248px;
  flex-direction: column;
  gap: 16px;
  @media screen and (min-width: 768px) {
    width: 248px;
  }
  @media screen and (min-width: 1280px) {
    gap: 24pxpx;
    max-width: none;
    width: 397px;
  }
`;

export const Label = styled.label`
  position: relative;
  width: 100%;
`;

export const Input = styled.input<{ $hasError: string }>`
  width: 100%;
  background-color: ${({ $hasError }) =>
    $hasError === 'active'
      ? 'var(--secondary-background-color)'
      : 'transparent'};
`;

export const Button = styled.button`
  width: 100%;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 8px;
  backdrop-filter: blur(12px);
  background: var(--accent-color);
  padding: 10px 91.5px 12px;
  color: var(--main-font-color);
  font-family: 'RightGrotesk-CompactBlack';
  font-size: 16px;
  font-weight: 900;
  line-height: 1.19;
  &:hover,
  :focus {
    color: var(--secondary-font-color);
  }
  @media screen and (min-width: 768px) {
    padding: 10px 107px 12px;
  }
  @media screen and (min-width: 1280px) {
    padding: 16px 170px 20px;
    font-size: 28px;
    line-height: 1.2;
  }
`;

export const ErrorSpan = styled.span`
  position: absolute;
  right: 0;
  bottom: -12px;
  color: var(--accent-color);
  text-align: end;
  font-family: 'MessinaSansMono-Regular';
  text-transform: uppercase;
  font-size: 10px;
  line-heigh: 1.2;
  @media screen and (min-width: 1280px) {
    font-size: 12px;
    line-heigh: 1.7;
  }
`;
