import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

import Button, { Props } from '../Button'

export const MenuCardContainer = styled.div`
  width: 320px;
  height: 338px;
  background-color: ${cores.salmao};
  color: ${cores.bege};
  display: flex;
  flex-direction: column;
  padding: 8px;
  margin-bottom: 32px;

  img {
    width: 304px;
    height: 167px;
    padding-bottom: 8px;
    object-fit: cover;
  }

  h3 {
    font-weight: 900;
    font-size: 16px;
    margin-bottom: 8px;
  }

  p {
    line-height: 22px;
    font-weight: 400;
    font-size: 14px;
  }
`

export const StyledButton = styled(Button)<Omit<Props, 'children'>>`
  background-color: ${cores.bege};
  margin-top: 8px;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
`
