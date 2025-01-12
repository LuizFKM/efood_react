import { ListContainer, Modal, ModalContent } from './styles'
import MenuCard from '../MenuCard'
import { ButtonContainer } from '../Button/style'
import { useState } from 'react'
import close from '../../assets/images/close.png'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'
import Button from '../Button'

export type CardapioItem = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type GenericProps<T> = {
  cards: T[]
}

type Props = GenericProps<CardapioItem>

const MenuList = ({ cards }: Props) => {
  const [visibleModalId, setVisibleModalId] = useState<number | null>(null)
  const dispatch = useDispatch()

  const addToCart = (item: CardapioItem) => {
    dispatch(add(item))
    dispatch(open())
    setVisibleModalId(null)
  }

  return (
    <>
      <ListContainer>
        {cards.map(({ id, nome, foto, descricao }) => (
          <MenuCard
            id={id}
            key={id}
            title={nome}
            image={foto}
            description={descricao}
            onClick={() => setVisibleModalId(id)}
          />
        ))}
      </ListContainer>

      {cards.map(
        ({ id, nome, foto, descricao, porcao, preco }) =>
          visibleModalId === id && (
            <Modal key={id} className="visible">
              <ModalContent className="container">
                <div>
                  <img src={foto} alt="" />
                </div>
                <div>
                  <h2 className="title">{nome}</h2>
                  <p className="descricao">{descricao}</p>
                  <p className="porcao">{porcao}</p>
                  <Button
                    variant="menuAndCheckout"
                    title="Adicionar ao carrinho"
                    type="button"
                    onClick={() =>
                      addToCart({ id, nome, foto, descricao, porcao, preco })
                    }
                  >
                    {`Adicionar ao carrinho - R$${preco.toFixed(2)}`}
                  </Button>
                </div>
                <img
                  className="closeButton"
                  src={close}
                  alt="ícone de fechar"
                  onClick={() => setVisibleModalId(null)}
                />
              </ModalContent>
              <div
                className="overlay"
                onClick={() => setVisibleModalId(null)}
              ></div>
            </Modal>
          )
      )}
    </>
  )
}

export default MenuList
