import styled from 'styled-components'
import { cores } from '../../styles'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.salmao};
  color: ${cores.bege};
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  margin-top: 16px;
  padding: 6px 4px;
  display: inline-block;
  margin-right: 8px;
`
