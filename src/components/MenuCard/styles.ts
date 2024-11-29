import styled from 'styled-components'
import { cores } from '../../styles'

import { ButtonContainer } from '../Button/style'

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

  ${ButtonContainer} {
    padding: 4px;
    margin-top: 8px;
    width: 100%;
    height: 24px;
    background-color: ${cores.bege};
    color: ${cores.salmao};
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;
  }
`
