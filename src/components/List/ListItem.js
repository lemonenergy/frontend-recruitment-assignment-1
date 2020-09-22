import React from 'react'
import styled, { css } from 'styled-components'
import { Body100 } from '../Text'

const StyledListItem = styled.li(
  ({ order, theme: { spacing, colors } }) => css`
    display: flex;
    align-items: baseline;

    &:before {
      content: ${order ? `'${order}'` : `'0'`};
      flex: 0 0 20px;

      font-family: 'Roboto', sans-serif;
      font-weight: 700;
      font-size: 0.75rem;
      line-height: 1.3rem;
      text-align: center;

      height: 20px;
      margin-right: ${spacing(1)};

      background-color: ${colors.primary.main};
      border-radius: 100%;
      color: ${colors.text.inverse};
    }
  `,
)

const ListItem = ({ order, children, className }) => {
  return (
    <StyledListItem order={order} className={className}>
      <Body100>{children}</Body100>
    </StyledListItem>
  )
}

export default styled(ListItem)``
