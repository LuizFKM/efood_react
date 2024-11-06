import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from '../Button'
import { ButtonContainer } from '../Button/style'

export const MenuCardContainer = styled.div`
  width: 320px;
  height: 338px;
  background-color: ${cores.salmao};
  color: ${cores.bege};
  gap: 8px;
  display: flex;
  flex-direction: column;
  padding: 8px;
  margin-bottom: 32px;

  h3 {
    font-weight: 900;
    font-size: 16px;
  }

  p {
    font-weight: 400;
    font-size: 14px;
  }

  ${ButtonContainer} {
    margin-top: 8px;
    width: 100%;
    background-color: ${cores.bege};
    color: ${cores.salmao};
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;
  }
`
