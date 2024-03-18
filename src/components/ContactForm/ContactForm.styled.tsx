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

export const Input = styled.input<{ $hasError: string }>`
  background-color: ${({ $hasError }) =>
    $hasError === 'active'
      ? 'var(--secondary-background-color)'
      : 'transparent'};
`;

export const Button = styled.button``;

export const ErrorSpan = styled.span`
  color: #d28b8b;
  text-align: end;
  font-family: var(--main-font);
  font-size: 12px;
  letter-spacing: -0.48px;
`;
