import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 472px);
  column-gap: 80px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    max-width: 100%;
  }
`
