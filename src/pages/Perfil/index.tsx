import { Container } from '../../styles'

import PerfilHeader from '../../components/PerfilHeader'
import MenuList from '../../components/MenuList'

import { useParams } from 'react-router-dom'
import { useGetDishesQuery } from '../../services/api'
import Cart from '../../components/Cart'
import Delivery from '../../components/Checkout'

const Perfil = () => {
  const { id } = useParams()
  const { data: pratos } = useGetDishesQuery(id!)

  if (!pratos) {
    return <p>Carregando...</p>
  }

  return (
    <>
      <PerfilHeader cards={[pratos]} />
      <Container>
        <MenuList cards={pratos.cardapio} />
        <Cart />
        <Delivery />
      </Container>
    </>
  )
}

export default Perfil
