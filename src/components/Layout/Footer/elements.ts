import styled, { css } from "styled-components";

export const Container = styled.footer(
  ({ theme }) => css`
    grid-row: footer;
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 2.4rem 3.6rem;
    background-color: ${theme.colors.grays[100]};
    color: ${theme.colors.grays[800]};
    font-size: ${theme.fontSizes.footer};
    font-weight: ${theme.weights.light};
  `
);
