import styled from 'styled-components'
import { cores } from '../../styles'

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

export const HeaderTitle = styled.div`
  font-weight: 900;
  font-size: 18px;
  color: ${cores.salmao};
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
  margin-top: 24px;
  color: ${cores.branco};
  font-weight: 100;
`

export const Subtitle = styled.h3`
  margin-bottom: 32px;
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
