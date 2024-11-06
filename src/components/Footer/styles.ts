import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterContainer = styled.footer`
  margin-top: 120px;
  width: 100%;
  background-color: ${cores.bege};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`
export const Logo = styled.img`
  width: 125px;
`
export const SocialLinks = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: space-around;
  gap: 8px;
`

export const FooterInfos = styled.div`
  p {
    margin-top: 80px;
    color: ${cores.salmao};
  }
`
