import styled, { css } from 'styled-components'

export const Body100 = styled.p(
  ({ bold }) => css`
    font-family: 'Roboto', 'monospace';
    font-weight: ${!bold ? '400' : '700'};
    font-size: 1rem;
    line-height: 1.5rem;
    letter-spacing: 0.02rem;
  `,
)

export const Body200 = styled.p(
  ({ bold }) => css`
    font-family: 'Roboto', 'monospace';
    font-weight: ${!bold ? '400' : '700'};
    font-size: 0.75rem;
    line-height: 1.5rem;
    letter-spacing: 0.02rem;
  `,
)

export const Title100 = styled.h1(
  () => css`
    font-weight: 900;
    font-size: 2rem;
    line-height: 2.5rem;
  `,
)

export const Title200 = styled.h1(
  () => css`
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2rem;
  `,
)

export const Overline100 = styled.p(
  () => css`
    font-weight: 700;
    font-size: 0.5rem;
    text-transform: uppercase;
    line-height: 0.68rem;
    letter-spacing: 0.2rem;
  `,
)

export const Button100 = styled.span(
  () => css`
    font-weight: 900;
    font-size: 0.875rem;
    text-transform: uppercase;
    line-height: 1rem;
    letter-spacing: 0.2rem;
  `,
)
