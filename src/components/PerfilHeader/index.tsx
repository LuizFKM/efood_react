import * as S from './styles'
import fundoHeader from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'
import { Container } from '../../styles'

import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

export type GenericProps<T> = {
  cards: T[]
}

type Props = GenericProps<Restaurantes>

const PerfilHeader = ({ cards }: Props) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }
  return (
    <>
      <S.PerfilBackground style={{ backgroundImage: `url(${fundoHeader})` }}>
        <Container>
          <S.Header>
            <S.HeaderTitle to={'/'}>Restaurantes</S.HeaderTitle>
            <S.Logo src={logo} alt="Logo" />
            <S.HeaderCart onClick={openCart}>
              {items.length} produto(s) no carrinho
            </S.HeaderCart>
          </S.Header>
        </Container>
      </S.PerfilBackground>
      {cards.map((card, id) => (
        <S.ImgBackground
          className="overlay"
          key={id}
          style={{ backgroundImage: `url(${card.capa})` }}
        >
          <div className="container">
            <S.Title>{card.tipo}</S.Title>
            <S.Subtitle>{card.titulo}</S.Subtitle>
          </div>
        </S.ImgBackground>
      ))}
    </>
  )
}

export default PerfilHeader
