import {
  PerfilBackground,
  Logo,
  ImgBackground,
  Header,
  HeaderTitle,
  HeaderCart,
  Title,
  Subtitle
} from './styles'
import fundoHeader from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'
import banner from '../../assets/images/imagem_de_fundo.png'
import { Container } from '../../styles'

const PerfilHeader = () => (
  <>
    <PerfilBackground style={{ backgroundImage: `url(${fundoHeader})` }}>
      <Container>
        <Header>
          <HeaderTitle>Restaurantes</HeaderTitle>
          <Logo src={logo} alt="" />
          <HeaderCart>0 produto(s) no carrinho</HeaderCart>
        </Header>
      </Container>
    </PerfilBackground>
    <ImgBackground style={{ backgroundImage: `url(${banner})` }}>
      <div className="container">
        <Title>Italiana</Title>
        <Subtitle>La Dolce Vita Trattoria</Subtitle>
      </div>
    </ImgBackground>
  </>
)

export default PerfilHeader
