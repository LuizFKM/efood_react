import { useDispatch, useSelector } from 'react-redux'

import { getTotalPrice } from '../../utils'

import * as S from './styles'
import { RootReducer } from '../../store'
import { close, openCheckout, remove } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeSidebar = () => {
    dispatch(close())
  }

  const checkout = () => {
    dispatch(openCheckout())
    dispatch(close())
  }
  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeSidebar} />
      <S.SideBar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <S.CartItem key={item.id}>
                  <img src={item.foto}></img>
                  <div>
                    <h3>{item.nome}</h3>
                    <span>{item.preco.toFixed(2)}</span>
                  </div>
                  <button onClick={() => removeItem(item.id)} type="button" />
                </S.CartItem>
              ))}
            </ul>
            <S.TotalPrice>
              <p>Valor total</p>
              <p>R${getTotalPrice(items).toFixed(2)}</p>
            </S.TotalPrice>
            <S.StyledButton
              variant="menuAndCheckout"
              type="button"
              title="Continuar com a entrega"
              onClick={checkout}
            >
              Continuar com a entrega
            </S.StyledButton>
          </>
        ) : (
          <S.EmptyMessage>
            <h4>
              Carrinho vazio, volte ao perfil e adicione pelo menos um produto
              para continuar com a compra!
            </h4>
            <S.StyledButton
              type="button"
              title="Voltar"
              variant="menuAndCheckout"
              onClick={closeSidebar}
            >
              Voltar
            </S.StyledButton>
          </S.EmptyMessage>
        )}
      </S.SideBar>
    </S.CartContainer>
  )
}

export default Cart
