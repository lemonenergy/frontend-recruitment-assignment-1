import styled, { css } from 'styled-components'

export const Container = styled.div(
  ({ theme: { spacing, media } }) => css`
    width: 100%;
    padding: 0 ${spacing(2)};
    display: flex;
    flex-direction: column;
    align-self: center;

    ${media.sm`
        width: 768px;
    `}

    ${media.md`
        width: 1024px;
    `}


    ${media.lg`
        width: 1440px;
    `}
  `,
)

export const Row = styled.div(
  ({ justify = 'flex-start', align = 'flex-start', theme: { spacing } }) => css`
    display: flex;
    flex-wrap: wrap;
    margin: 0 -${spacing(1)};
    justify-content: ${justify};
    align-items: ${align};

    > * {
      flex: 1 1 auto;
      padding: 0 ${spacing(1)};
    }
  `,
)
