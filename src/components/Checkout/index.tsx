import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import InputMask from 'react-input-mask'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import Formulario from '../Form'
import Button from '../Button'

import { RootReducer } from '../../store'
import { open, closeCheckout, close, clear } from '../../store/reducers/cart'
import { usePurchaseMutation } from '../../services/api'
import { getTotalPrice } from '../../utils'

import { ButtonLink } from '../Button/style'
import * as S from './styles'
import { Overlay } from '../Cart/styles'

const Delivery = () => {
  const { isOpen, isCheckout, items } = useSelector(
    (state: RootReducer) => state.cart
  )
  const [payment, setPayment] = useState(false)
  const [purchase, { isSuccess, data }] = usePurchaseMutation()
  const dispatch = useDispatch()

  const totalPrice = getTotalPrice(items).toFixed(2)

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
    validationSchema: Yup.object({
      recipientName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      deliveryAdress: Yup.string()
        .min(10, 'Insira o endereço completo')
        .required('O campo é obrigatório'),
      city: Yup.string().required('Campo obrigatório'),
      cep: Yup.string()
        .min(9, 'O campo precisa ter 9 caracteres')
        .max(9, 'O campo precisa ter 9 caracteres')
        .required('O campo é obrigatório'),
      numero: Yup.string().required('O campo é obrigatório'),
      adressLine2: Yup.string().notRequired(),
      cardOwner: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cardNumber: Yup.string().required('O campo é obrigatório'),
      cardCode: Yup.string().required('O campo é obrigatório'),
      expiresMonth: Yup.string().required('O campo é obrigatório'),
      expiresYear: Yup.string().required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.recipientName,
          address: {
            description: values.deliveryAdress,
            city: values.city,
            zipCode: values.cep,
            number: Number(values.numero),
            complement: values.adressLine2
          }
        },
        payment: {
          card: {
            name: values.cardOwner,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number
        }))
      })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const closeSidebar = () => {
    dispatch(close())
    dispatch(closeCheckout())
  }

  const returnToCart = () => {
    dispatch(closeCheckout())
    dispatch(open())
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [dispatch, isSuccess])
  return (
    <>
      {isSuccess && data ? (
        <S.DeliveryContainer className="is-open">
          <Overlay />
          <S.SideBar>
            <Formulario title={`Pedido realizado - ${data.orderId}`}>
              <S.Confirmacao>
                <p>
                  Estamos felizes em informar que seu pedido já está em processo
                  de preparação e, em breve, será entregue no endereço
                  fornecido.
                </p>
                <p>
                  Gostaríamos de ressaltar que nossos entregadores não estão
                  autorizados a realizar cobranças extras.
                </p>
                <p>
                  Lembre-se da importância de higienizar as mãos após o
                  recebimento do pedido, garantindo assim sua segurança e
                  bem-estar durante a refeição.
                </p>
                <p>
                  Esperamos que desfrute de uma deliciosa e agradável
                  experiência gastronômica. Bom apetite!
                </p>
                <ButtonLink
                  type="link"
                  title="Concluir"
                  to="/"
                  onClick={closeSidebar}
                >
                  Concluir
                </ButtonLink>
              </S.Confirmacao>
            </Formulario>
          </S.SideBar>
        </S.DeliveryContainer>
      ) : (
        <form onSubmit={form.handleSubmit}>
          <S.DeliveryContainer
            className={!isOpen && isCheckout ? 'is-open' : ''}
          >
            <Overlay onClick={closeSidebar} />
            <S.SideBar>
              {payment ? (
                <S.FormContainer>
                  <Formulario
                    title={`Pagamento - Valor a pagar R$ ${totalPrice}`}
                  >
                    <>
                      <S.InputGroup>
                        <label htmlFor="cardOwner">Nome no cartão</label>
                        <input
                          type="text"
                          id="cardOwner"
                          name="cardOwner"
                          value={form.values.cardOwner}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('cardOwner') ? 'error' : ''
                          }
                        />
                      </S.InputGroup>
                      <S.InputGroup>
                        <label htmlFor="cardNumber">Número do cartão</label>
                        <InputMask
                          type="text"
                          id="cardNumber"
                          name="cardNumber"
                          value={form.values.cardNumber}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('cardNumber') ? 'error' : ''
                          }
                          mask="9999-9999-9999-99"
                        />
                      </S.InputGroup>
                      <S.InputGroup>
                        <label htmlFor="cardCode">CVV</label>
                        <InputMask
                          type="text"
                          id="cardCode"
                          name="cardCode"
                          value={form.values.cardCode}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('cardCode') ? 'error' : ''
                          }
                          mask="999"
                        />
                      </S.InputGroup>
                      <S.InputGroup className="cepNumero">
                        <label htmlFor="expiresMonth">Mês de vencimento</label>
                        <label htmlFor="expiresYear">Ano de vencimento</label>
                        <InputMask
                          type="text"
                          id="expiresMonth"
                          name="expiresMonth"
                          value={form.values.expiresMonth}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('expiresMonth') ? 'error' : ''
                          }
                          mask="99"
                        />

                        <InputMask
                          type="text"
                          id="expiresYear"
                          name="expiresYear"
                          value={form.values.expiresYear}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('expiresYear') ? 'error' : ''
                          }
                          mask="99"
                        />
                      </S.InputGroup>

                      <Button
                        type="submit"
                        title="Finalizar pagamento"
                        onClick={form.handleSubmit}
                        variant="menuAndCheckout"
                      >
                        Finalizar pagamento
                      </Button>
                      <Button
                        onClick={() => setPayment(false)}
                        type="button"
                        title="Voltar para edição de endereço"
                        variant="menuAndCheckout"
                      >
                        Voltar para edição de endereço
                      </Button>
                    </>
                  </Formulario>
                </S.FormContainer>
              ) : (
                <S.FormContainer>
                  <Formulario title="Entrega">
                    <>
                      <S.InputGroup>
                        <label htmlFor="recipientName">Quem irá receber</label>
                        <input
                          type="text"
                          id="recipientName"
                          name="recipientName"
                          value={form.values.recipientName}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('recipientName') ? 'error' : ''
                          }
                        />
                      </S.InputGroup>
                      <S.InputGroup>
                        <label htmlFor="deliveryAdress">Endereço</label>
                        <input
                          type="text"
                          id="deliveryAdress"
                          name="deliveryAdress"
                          value={form.values.deliveryAdress}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('deliveryAdress') ? 'error' : ''
                          }
                        />
                      </S.InputGroup>
                      <S.InputGroup>
                        <label htmlFor="city">Cidade</label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={form.values.city}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={checkInputHasError('city') ? 'error' : ''}
                        />
                      </S.InputGroup>
                      <S.InputGroup className="cepNumero">
                        <label htmlFor="cep">CEP</label>
                        <label htmlFor="numero">Número</label>
                        <InputMask
                          type="text"
                          id="cep"
                          name="cep"
                          value={form.values.cep}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={checkInputHasError('cep') ? 'error' : ''}
                          mask="99999-999"
                        />
                        <input
                          type="text"
                          id="numero"
                          name="numero"
                          value={form.values.numero}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('numero') ? 'error' : ''
                          }
                        />
                      </S.InputGroup>
                      <S.InputGroup>
                        <label htmlFor="addressLine2">
                          Complemento (opcional)
                        </label>
                        <input
                          type="text"
                          id="addressLine2"
                          name="adressLine2"
                          value={form.values.adressLine2}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        />
                      </S.InputGroup>
                      <Button
                        type="button"
                        onClick={() => setPayment(true)}
                        title="Continuar com o pagamento"
                        variant="menuAndCheckout"
                      >
                        Continuar com o pagamento
                      </Button>
                      <Button
                        type="button"
                        onClick={returnToCart}
                        title="Voltar para o carrinho"
                        variant="menuAndCheckout"
                      >
                        Voltar para o carrinho
                      </Button>
                    </>
                  </Formulario>
                </S.FormContainer>
              )}
            </S.SideBar>
          </S.DeliveryContainer>
        </form>
      )}
    </>
  )
}

export default Delivery
