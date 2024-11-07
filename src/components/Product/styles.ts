import styled from 'styled-components'

import { cores } from '../../styles'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${cores.branco};
  position: relative;
  max-width: 472px;
  margin-top: 48px;
  color: ${cores.salmao};
  img {
    width: 100%;
  }
`

export const CardTitle = styled.div`
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`
export const CardRate = styled.div`
  display: flex;
  gap: 8px;

  img {
    object-fit: contain;
  }
`

export const CardContent = styled.div`
  border: solid 1px ${cores.salmao};
  border-top: none;
  padding: 8px;
  p {
    font-size: 14px;
    font-weight: 400;
  }
`
export const ContainerDescription = styled.div`
  max-width: 456px;
  padding-bottom: 16px;
`

export const CategoryInfos = styled.div`
  position: absolute;
  top: 8px;
  right: 16px;
`
