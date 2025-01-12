import { useEffect, useState } from 'react'
import { Overlay } from '../Cart/styles'
import Formulario from '../Form'
import {
  Confirmacao,
  DeliveryContainer,
  FormContainer,
  InputGroup,
  SideBar
} from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { open, closeCheckout, close, clear } from '../../store/reducers/cart'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../services/api'
import { getTotalPrice } from '../../utils'
import Button from '../Button'
import { ButtonLink } from '../Button/style'

const Delivery = () => {
  const { isOpen, isCheckout, items } = useSelector(
    (state: RootReducer) => state.cart
  )
  const [payment, setPayment] = useState(false)
  const [purchase, { isSuccess, isError, data }] = usePurchaseMutation()
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

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return message
    return ''
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
        <DeliveryContainer className="is-open">
          <Overlay />
          <SideBar>
            <Formulario title={`Pedido realizado - ${data.orderId}`}>
              <Confirmacao>
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
              </Confirmacao>
            </Formulario>
          </SideBar>
        </DeliveryContainer>
      ) : (
        <form onSubmit={form.handleSubmit}>
          <DeliveryContainer className={!isOpen && isCheckout ? 'is-open' : ''}>
            <Overlay onClick={closeSidebar} />
            <SideBar>
              {payment ? (
                <FormContainer>
                  <Formulario
                    title={`Pagamento - Valor a pagar R$ ${totalPrice}`}
                  >
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
                        <small>
                          {getErrorMessage('cardOwner', form.errors.cardOwner)}
                        </small>
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
                        <small>
                          {getErrorMessage(
                            'cardNumber',
                            form.errors.cardNumber
                          )}
                        </small>
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
                        <small>
                          {getErrorMessage('cardCode', form.errors.cardCode)}
                        </small>
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
                        <small>
                          {getErrorMessage(
                            'expiresMonth',
                            form.errors.expiresMonth
                          )}
                        </small>
                        <small>
                          {getErrorMessage(
                            'expiresYear',
                            form.errors.expiresYear
                          )}
                        </small>
                      </InputGroup>

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
                        <small>
                          {getErrorMessage(
                            'recipientName',
                            form.errors.recipientName
                          )}
                        </small>
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
                        <small>
                          {getErrorMessage(
                            'deliveryAdress',
                            form.errors.deliveryAdress
                          )}
                        </small>
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
                        <small>
                          {getErrorMessage('city', form.errors.city)}
                        </small>
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
                        <small>{getErrorMessage('cep', form.errors.cep)}</small>
                        <small>
                          {getErrorMessage('numero', form.errors.numero)}
                        </small>
                      </InputGroup>
                      <InputGroup>
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
                      </InputGroup>
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
                </FormContainer>
              )}
            </SideBar>
          </DeliveryContainer>
        </form>
      )}
    </>
  )
}

export default Delivery
