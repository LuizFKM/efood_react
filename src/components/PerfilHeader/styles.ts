import styled from 'styled-components'
import { cores } from '../../styles'

import { Link } from 'react-router-dom'

export const PerfilBackground = styled.header`
  padding-top: 64px;
  width: 100%;
  height: 186px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HeaderTitle = styled(Link)`
  font-weight: 900;
  font-size: 18px;
  color: ${cores.salmao};
  text-decoration: none;
`
export const HeaderCart = styled.div`
  font-weight: 900;
  font-size: 18px;
  color: ${cores.salmao};
`

export const Logo = styled.img``

export const Slogan = styled.h2`
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;
`
export const Title = styled.p`
  color: ${cores.branco};
  font-weight: 100;
  padding-top: 26px;
  font-size: 32px;
`

export const Subtitle = styled.h3`
  font-size: 32px;
  margin-bottom: 32px;
  padding-top: 156px;
  font-weight: 900;
  color: ${cores.branco};
`

export const ImgBackground = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  height: 280px;
  margin-bottom: 56px;

  .container {
    height: 280px;
    font-size: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`
