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
import { Container } from '../../styles'
import { Restaurantes } from '../../pages/Home'

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
            <HeaderTitle to={'/'}>Restaurantes</HeaderTitle>
            <Logo src={logo} alt="Logo" />
            <HeaderCart>0 produto(s) no carrinho</HeaderCart>
          </Header>
        </Container>
      </PerfilBackground>
      {cards.map((card, id) => (
        <ImgBackground
          className="overlay"
          key={id}
          style={{ backgroundImage: `url(${card.capa})` }}
        >
          <div className="container">
            <Title>{card.tipo}</Title>
            <Subtitle>{card.titulo}</Subtitle>
          </div>
        </ImgBackground>
      ))}
    </>
  )
}

export default PerfilHeader
