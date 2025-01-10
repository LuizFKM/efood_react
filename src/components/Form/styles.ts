import { styled } from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer } from '../Button/style'

export const FormContainer = styled.div`
  h3 {
    margin-bottom: 16px;
    font-weight: 700;
    color: ${cores.bege};
  }

  ${ButtonContainer} {
    padding: 4px;
    margin-top: 8px;
    max-width: 100%;
    width: 100%;
    height: 24px;
    background-color: ${cores.bege};
    color: ${cores.salmao};
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;
  }
`
