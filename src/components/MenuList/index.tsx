import { ListContainer } from './styles'
import MenuCard from '../MenuCard'

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

const MenuList = ({ cards }: Props) => (
  <ListContainer>
    {cards.map(({ id, nome, foto, descricao }) => (
      <MenuCard key={id} title={nome} image={foto} description={descricao} />
    ))}
  </ListContainer>
)

export default MenuList
