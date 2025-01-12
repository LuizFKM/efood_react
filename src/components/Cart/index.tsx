import { useDispatch, useSelector } from 'react-redux'

import { getTotalPrice } from '../../utils'

import {
  Overlay,
  CartContainer,
  SideBar,
  CartItem,
  TotalPrice,
  StyledButton
} from './styles'
import { RootReducer } from '../../store'
import { close, openCheckout, remove } from '../../store/reducers/cart'
import Button from '../Button'

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
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeSidebar} />
      <SideBar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <CartItem key={item.id}>
                  <img src={item.foto}></img>
                  <div>
                    <h3>{item.nome}</h3>
                    <span>{item.preco.toFixed(2)}</span>
                  </div>
                  <button onClick={() => removeItem(item.id)} type="button" />
                </CartItem>
              ))}
            </ul>
            <TotalPrice>
              <p>Valor total</p>
              <p>R${getTotalPrice(items).toFixed(2)}</p>
            </TotalPrice>
            <StyledButton
              variant="menuAndCheckout"
              type="button"
              title="Continuar com a entrega"
              onClick={checkout}
            >
              Continuar com a entrega
            </StyledButton>
          </>
        ) : (
          <h4>
            Carrinho vazio, volte ao perfil e adicione pelo menos um produto
            para continuar com a compra!
          </h4>
        )}
      </SideBar>
    </CartContainer>
  )
}

export default Cart
