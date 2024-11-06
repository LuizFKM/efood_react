import logo from '../../assets/images/logo.png'
import Instagram from '../../assets/images/Instagram.png'
import Facebook from '../../assets/images/Facebook.png'
import Twitter from '../../assets/images/Twitter.png'
import { FooterContainer, FooterInfos, Logo, SocialLinks } from './styles'

const Footer = () => (
  <FooterContainer>
    <div className="container">
      <Logo src={logo} />
      <SocialLinks>
        <img src={Instagram} alt="link com logo do instagram" />
        <img src={Facebook} alt="link com logo do facebook" />
        <img src={Twitter} alt="link com logo do twiiter" />
      </SocialLinks>
      <FooterInfos>
        <p>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </p>
      </FooterInfos>
    </div>
  </FooterContainer>
)

export default Footer
