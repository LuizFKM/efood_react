import { useState } from 'react'
import { ButtonContainer } from '../Button/style'
import { Overlay } from '../Cart/styles'
import Form from '../Form'
import { DeliveryContainer, FormContainer, InputGroup, SideBar } from './styles'

const Delivery = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [payment, setPayment] = useState(false)

  return (
    <DeliveryContainer>
      <Overlay />
      <SideBar>
        {payment ? (
          <FormContainer>
            <Form title="Pagamento - Valor a pagar R$ 190,00">
              <form>
                <InputGroup>
                  <label htmlFor="cardOwner">Nome no cartão</label>
                  <input type="text" id="cardOwner" />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="cardNumber">Número do cartão</label>
                  <input type="text" id="cardNumber" />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="cardCode">CVV</label>
                  <input type="text" id="cardCorde" />
                </InputGroup>
                <InputGroup className="cepNumero">
                  <label htmlFor="expiresMonth">Mês de vencimento</label>
                  <label htmlFor="expiresYear">Ano de vencimento</label>
                  <input type="text" id="expiresMonth" />
                  <input type="text" id="expiresYear" />
                </InputGroup>

                <ButtonContainer type="button">
                  Finalizar pagamento
                </ButtonContainer>
                <ButtonContainer
                  onClick={() => setPayment(false)}
                  type="button"
                >
                  Voltar para edição de endereço
                </ButtonContainer>
              </form>
            </Form>
          </FormContainer>
        ) : (
          <FormContainer>
            <Form title="Entrega">
              <form>
                <InputGroup>
                  <label htmlFor="recipientName">Quem irá receber</label>
                  <input type="text" id="recipientName" />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="deliveryAdress">Endereço</label>
                  <input type="text" id="deliveryAdress" />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="cidade">Cidade</label>
                  <input type="text" id="cidade" />
                </InputGroup>
                <InputGroup className="cepNumero">
                  <label htmlFor="cep">CEP</label>
                  <label htmlFor="numero">Número</label>
                  <input type="text" id="cep" />
                  <input type="text" id="numero" />
                </InputGroup>
                <InputGroup className="cepNumero"></InputGroup>
                <InputGroup>
                  <label htmlFor="addressLine2">Complemento</label>
                  <input type="text" id="addressLine2" />
                </InputGroup>
                <ButtonContainer type="button" onClick={() => setPayment(true)}>
                  Continuar com o pagamento
                </ButtonContainer>
                <ButtonContainer type="button">
                  Voltar para o carrinho
                </ButtonContainer>
              </form>
            </Form>
          </FormContainer>
        )}
      </SideBar>
    </DeliveryContainer>
  )
}

export default Delivery
