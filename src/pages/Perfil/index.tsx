import { Restaurantes } from '../../pages/Home'
import { Container } from '../../styles'

import PerfilHeader from '../../components/PerfilHeader'

import MenuList from '../../components/MenuList'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

type Props = {
  cardapio: Pick<Restaurantes, 'cardapio'>
  id: Pick<Restaurantes, 'id'>
  titulo: Pick<Restaurantes, 'titulo'>
}

const Perfil = () => {
  const { id } = useParams()

  const [pratos, setPratos] = useState<Props[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setPratos(res))
  }, [id])

  console.table(pratos)

  return (
    <>
      <PerfilHeader cards={[pratos]} key={id} />
      <Container>
        <MenuList cards={[pratos]} />
      </Container>
    </>
  )
}

export default Perfil
