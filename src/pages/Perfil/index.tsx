import { Restaurantes } from '../../pages/Home'
import { Container } from '../../styles'

import PerfilHeader from '../../components/PerfilHeader'

import MenuList from '../../components/MenuList'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

type Props = {
  cardapios: Restaurantes[]
}

const Perfil = () => {
  const { id } = useParams()

  const [pratos, setPratos] = useState<Props[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => {
        console.table(res)
        setPratos(res)
      })
  }, [id])

  return (
    <>
      <PerfilHeader key={id} cards={[pratos]} />
      <Container>
        <MenuList cards={[pratos]} />
      </Container>
    </>
  )
}

export default Perfil
