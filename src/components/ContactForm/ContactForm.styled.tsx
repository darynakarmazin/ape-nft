import styled from 'styled-components';

export const Form = styled.form`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const Label = styled.label``;

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
