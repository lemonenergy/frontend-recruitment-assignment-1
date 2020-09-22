import styled, { css } from 'styled-components'
import ListItem from './ListItem'

const List = styled.ol(
  ({ theme: { spacing } }) => css`
    list-style: none;
    padding: 0;
    margin: 0;

    ${ListItem} {
      margin-bottom: ${spacing(4)};
    }
  `,
)

export default List
