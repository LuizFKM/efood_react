import Menu from '../../models/Menu'
import MenuCard from '../MenuCard'
import { ListContainer } from './styles'

export type Props = {
  cards: Menu[]
}

const MenuList = ({ cards }: Props) => (
  <ListContainer>
    {cards.map((card) => (
      <MenuCard
        description={card.description}
        image={card.image}
        title={card.title}
        key={card.id}
      />
    ))}
  </ListContainer>
)

export default MenuList
