import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'
import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  background-color: ${(props) =>
    props.variant === 'cardRestaurante' ? cores.salmao : cores.bege};
  color: ${(props) =>
    props.variant === 'cardRestaurante' ? cores.bege : cores.salmao};
  border: none;
  padding: 6px 4px;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
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
