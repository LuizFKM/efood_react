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
import { Restaurantes } from '../../pages/Home'

// type Props = {
//   cards: Restaurantes[]
// }

export type GenericProps<T> = {
  cards: T[]
}

type Props = GenericProps<Restaurantes>

const PerfilHeader = ({ cards }: Props) => {
  return (
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
        {cards.map((card, id) => (
          <div className="container" key={id}>
            <Title>{card.tipo}</Title>
            <Subtitle>{card.titulo}</Subtitle>
          </div>
        ))}
      </ImgBackground>
    </>
  )
}

export default PerfilHeader
