import { Restaurantes } from '../../pages/Home'
import MenuCard from '../MenuCard'
import { ListContainer } from './styles'

type Props = {
  cards: Restaurantes[]
}

const MenuList = ({ cards }: Props) => (
  <ListContainer>
    {cards.flatMap(
      ({ cardapio }) =>
        cardapio?.map(({ id, nome, foto, descricao }) => (
          <MenuCard
            key={id}
            title={nome}
            image={foto}
            description={descricao}
          />
        )) || []
    )}
  </ListContainer>
)

export default MenuList
