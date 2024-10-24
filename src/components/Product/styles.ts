import styled from 'styled-components'

import { cores } from '../../styles'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${cores.branco};
  position: relative;
  max-width: 472px;
  margin-top: 48px;

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
`

export const CardContent = styled.div`
  padding: 8px;
  p {
    margin-bottom: 16px;
  }
`
export const CategoryInfos = styled.div`
  position: absolute;
  top: 8px;
  right: 16px;
`
