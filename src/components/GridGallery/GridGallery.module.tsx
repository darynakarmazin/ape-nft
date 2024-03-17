import styled from 'styled-components';

export const GridContainer = styled.ul`
  display: none;
  @media screen and (min-width: 768px) {
    display: grid;
    gap: 24px;

    grid-template-columns: repeat(2, 284px);
    justify-content: space-between;
  }
  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(2, 504px);
  }
`;

export const Card = styled.li`
  @media screen and (min-width: 768px) {
    padding: 24px;
    border-radius: 16px;
    background-color: var(--secondary-background-color);
    color: var(--main-font-color);
    height: 242px;
  }
  @media screen and (min-width: 1280px) {
    height: 480px;
  }
`;
