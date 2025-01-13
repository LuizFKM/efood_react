import styled from 'styled-components'

import { cores } from '../../styles'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${cores.branco};
  position: relative;
  margin-top: 48px;
  color: ${cores.salmao};
  overflow: hidden;

  img {
    object-fit: cover;
    max-height: 216px;
    max-width: 100%;
  }
`

export const CardTitle = styled.div`
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  flex-wrap: wrap;
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
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;

  p {
    line-height: 22px;
    font-size: 14px;
    font-weight: 400;
  }
`
export const ContainerDescription = styled.div`
  padding-bottom: 16px;
`

export const CategoryInfos = styled.div`
  position: absolute;
  top: 8px;
  right: 16px;
`
