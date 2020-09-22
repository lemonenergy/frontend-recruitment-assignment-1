import React from 'react'
import styled, { css } from 'styled-components'

const Container = styled.div(
  ({ theme: { media, spacing } }) => css`
    box-sizing: content-box;
    flex: 0 1 auto;
    max-height: 100%;
    overflow: auto;
    display: grid;
    grid-template-columns: 100%;
    column-gap: ${spacing(2)};
    row-gap: ${spacing(3)};
    margin-bottom: ${spacing(3)};

    ${media.sm`
      grid-template-columns: repeat(2, 1fr);
      > * {
        max-width: 359px;
      }
    `}

    ${media.md`
      grid-template-columns: repeat(3, 1fr);
      > * {
        max-width: 319px;
      }
    `}

    ${media.lg`
      grid-template-columns: repeat(4, 1fr);
    `}
  `,
)

const CardGrid = ({ children, ...props }, ref) => {
  return (
    <Container {...props} ref={ref}>
      {children}
    </Container>
  )
}

export default React.forwardRef(CardGrid)
