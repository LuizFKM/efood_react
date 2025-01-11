import { useState } from 'react'
import { ButtonContainer } from '../Button/style'
import { Overlay } from '../Cart/styles'
import Formulario from '../Form'
import { DeliveryContainer, FormContainer, InputGroup, SideBar } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { open, closeCheckout, close } from '../../store/reducers/cart'
import { useFormik } from 'formik'

const Delivery = () => {
  const { isOpen, isCheckout } = useSelector((state: RootReducer) => state.cart)
  const [payment, setPayment] = useState(false)
  const dispatch = useDispatch()

  const form = useFormik({
    initialValues: {
      recipientName: '',
      deliveryAdress: '',
      city: '',
      cep: '',
      numero: '',
      adressLine2: '',
      cardOwner: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    onSubmit: (values) => {
      console.log(values)
    }
  })

  const closeSidebar = () => {
    dispatch(close())
    dispatch(closeCheckout())
  }

  const returnToCart = () => {
    dispatch(closeCheckout())
    dispatch(open())
  }
  console.log(form)
  return (
    <form onSubmit={form.handleSubmit}>
      <DeliveryContainer className={!isOpen && isCheckout ? 'is-open' : ''}>
        <Overlay onClick={closeSidebar} />
        <SideBar>
          {payment ? (
            <FormContainer>
              <Formulario title="Pagamento - Valor a pagar R$ 190,00">
                <>
                  <InputGroup>
                    <label htmlFor="cardOwner">Nome no cartão</label>
                    <input
                      type="text"
                      id="cardOwner"
                      name="cardOwner"
                      value={form.values.cardOwner}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={form.values.cardNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="cardCode">CVV</label>
                    <input
                      type="text"
                      id="cardCode"
                      name="cardCode"
                      value={form.values.cardCode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                  </InputGroup>
                  <InputGroup className="cepNumero">
                    <label htmlFor="expiresMonth">Mês de vencimento</label>
                    <label htmlFor="expiresYear">Ano de vencimento</label>
                    <input
                      type="text"
                      id="expiresMonth"
                      name="expiresMonth"
                      value={form.values.expiresMonth}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <input
                      type="text"
                      id="expiresYear"
                      name="expiresYear"
                      value={form.values.expiresYear}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                  </InputGroup>

                  <ButtonContainer type="submit">
                    Finalizar pagamento
                  </ButtonContainer>
                  <ButtonContainer
                    onClick={() => setPayment(false)}
                    type="button"
                  >
                    Voltar para edição de endereço
                  </ButtonContainer>
                </>
              </Formulario>
            </FormContainer>
          ) : (
            <FormContainer>
              <Formulario title="Entrega">
                <>
                  <InputGroup>
                    <label htmlFor="recipientName">Quem irá receber</label>
                    <input
                      type="text"
                      id="recipientName"
                      name="recipientName"
                      value={form.values.recipientName}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="deliveryAdress">Endereço</label>
                    <input
                      type="text"
                      id="deliveryAdress"
                      name="deliveryAdress"
                      value={form.values.deliveryAdress}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="city">Cidade</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={form.values.city}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                  </InputGroup>
                  <InputGroup className="cepNumero">
                    <label htmlFor="cep">CEP</label>
                    <label htmlFor="numero">Número</label>
                    <input
                      type="text"
                      id="cep"
                      name="cep"
                      value={form.values.cep}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <input
                      type="text"
                      id="numero"
                      name="numero"
                      value={form.values.numero}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="addressLine2">Complemento</label>
                    <input
                      type="text"
                      id="addressLine2"
                      name="adressLine2"
                      value={form.values.adressLine2}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                  </InputGroup>
                  <ButtonContainer
                    type="submit"
                    onClick={() => setPayment(true)}
                  >
                    Continuar com o pagamento
                  </ButtonContainer>
                  <ButtonContainer type="button" onClick={returnToCart}>
                    Voltar para o carrinho
                  </ButtonContainer>
                </>
              </Formulario>
            </FormContainer>
          )}
        </SideBar>
      </DeliveryContainer>
    </form>
  )
}

export default Delivery
