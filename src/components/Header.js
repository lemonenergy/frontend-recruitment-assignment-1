import React from 'react'
import styled, { css } from 'styled-components'
import { Container, Row } from './Grid'
import { Overline100 } from './Text'
import { ReactComponent as LemonLogo } from '../images/LemonLogo.svg'

const StyledHeader = styled.div(
  ({ theme: { spacing, media } }) => css`
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    padding-top: ${spacing(3)};
    margin-bottom: ${spacing(6)};

    svg {
      margin-right: ${spacing(1)};
      width: 26px;
    }

    ${media.sm`
      margin-bottom: ${spacing(8)};
    `}
  `,
)

const Header = () => {
  return (
    <Container as="header">
      <Row>
        <StyledHeader>
          <LemonLogo className="__logo" />
          <Overline100>Frontend - technical assignment</Overline100>
        </StyledHeader>
      </Row>
    </Container>
  )
}

export default Header
