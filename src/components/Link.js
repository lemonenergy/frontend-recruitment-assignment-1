import styled, { css } from 'styled-components'

const Link = styled.a(
  ({ theme: { colors } }) => css`
    color: ${colors.text.link};
    text-decoration: underline;

    &:hover {
      color: ${colors.primary.dark};
    }
  `,
)

export default Link
