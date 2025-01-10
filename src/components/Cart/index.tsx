import { useDispatch, useSelector } from 'react-redux'
import { ButtonContainer } from '../Button/style'

import { Overlay, CartContainer, SideBar, CartItem, TotalPrice } from './styles'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeSidebar = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acc, valorAtual) => {
      return (acc += valorAtual.preco!)
    }, 0)
  }
  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeSidebar} />
      <SideBar>
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
          <p>R${getTotalPrice().toFixed(2)}</p>
        </TotalPrice>
        <ButtonContainer>Continuar com a entrega</ButtonContainer>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
