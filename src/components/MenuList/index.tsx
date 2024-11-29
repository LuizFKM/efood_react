import { Pratos } from '../../pages/Home'
import MenuCard from '../MenuCard'
import { ListContainer } from './styles'

type MenuListProps = {
  cards: Pratos[]
}

const MenuList: React.FC<MenuListProps> = ({ cards }) => (
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
