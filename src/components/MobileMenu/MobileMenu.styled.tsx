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
