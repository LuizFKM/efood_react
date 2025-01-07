import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

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

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
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
export const HeaderCart = styled.a`
  font-weight: 900;
  font-size: 18px;
  color: ${cores.salmao};
  cursor: pointer;
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
  text-transform: capitalize;
`

export const Subtitle = styled.h3`
  font-size: 32px;
  margin-bottom: 32px;
  padding-top: 156px;
  font-weight: 900;
  color: ${cores.branco};

  @media (max-width: ${breakpoints.tablet}) {
    padding-top: 0;
  }
`

export const ImgBackground = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  height: 280px;
  margin-bottom: 56px;
  position: relative;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 100%;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }

  .container {
    position: relative;
    height: 280px;
    font-size: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 2;
  }
`
