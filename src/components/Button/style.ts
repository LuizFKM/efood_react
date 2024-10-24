import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button`
  background-color: ${cores.salmao};
  color: ${cores.offwhite};
  border: none;
  padding: 6px 4px;
  font-size: 12px;
  font-weight: bold;
`

export const ButtonLink = styled(Link)`
  background-color: ${cores.salmao};
  color: ${cores.offwhite};
  border: none;
  padding: 6px 4px;
  font-size: 12px;
  font-weight: bold;
  text-decoration: none;
  display: inline-block;
  width: 82px;
  text-align: center;
`
