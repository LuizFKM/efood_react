import { Pratos } from '../../pages/Home'
import { Container } from '../../styles'

import PerfilHeader from '../../components/PerfilHeader'

import MenuList from '../../components/MenuList'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Perfil = () => {
  const { id } = useParams()

  const [pratos, setPratos] = useState<Pratos[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setPratos(res))
  }, [id])

  return (
    <>
      <PerfilHeader cards={pratos} />
      <Container>
        <MenuList cards={pratos} />
      </Container>
    </>
  )
}

export default Perfil
