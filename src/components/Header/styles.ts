import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBackground = styled.header`
  width: 100%;
  height: 384px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.img`
  padding-top: 64px;
`

export const Slogan = styled.h2`
  color: ${cores.salmao};
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;
`
