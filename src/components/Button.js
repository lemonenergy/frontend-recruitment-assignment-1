import React from 'react'
import styled, { css } from 'styled-components'

import { Button100 } from './Text'

const Container = styled.button(
  ({ theme: { spacing, colors } }) => css`
    color: ${colors.text.button};
    text-align: center;

    outline: none;
    width: 341px;
    padding: ${spacing(3)} ${spacing(7)};
    border: 2px solid ${colors.text.button};
    border-radius: 50px;

    background-color: transparent;
    cursor: pointer;

    &:hover {
      border-color: ${colors.primary.main};
      color: ${colors.primary.main};
    }
  `,
)

const Button = ({ children, className, onClick }) => {
  return (
    <Container onClick={onClick} className={className}>
      <Button100>{children}</Button100>
    </Container>
  )
}

export default styled(Button)``
