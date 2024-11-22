import Pizza from '../../assets/images/Pizza_marquerita.png'

import { Container } from '../../styles'
import Menu from '../../models/Menu'

import PerfilHeader from '../../components/PerfilHeader'

import MenuList from '../../components/MenuList'

const card: Menu[] = [
  {
    id: 1,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: Pizza,
    title: 'Pizza Marguerita'
  },
  {
    id: 2,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: Pizza,
    title: 'Pizza Marguerita'
  },
  {
    id: 3,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: Pizza,
    title: 'Pizza Marguerita'
  },
  {
    id: 4,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: Pizza,
    title: 'Pizza Marguerita'
  },
  {
    id: 5,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: Pizza,
    title: 'Pizza Marguerita'
  },
  {
    id: 6,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: Pizza,
    title: 'Pizza Marguerita'
  }
]

const Perfil = () => {
  return (
    <>
      <PerfilHeader />
      <Container>
        <MenuList cards={card} />
      </Container>
    </>
  )
}

export default Perfil
