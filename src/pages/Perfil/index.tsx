import { Restaurantes } from '../../pages/Home'
import { Container } from '../../styles'

import PerfilHeader from '../../components/PerfilHeader'
import MenuList from '../../components/MenuList'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Perfil = () => {
  const { id } = useParams()

  const [pratos, setPratos] = useState<Restaurantes | null>(null)

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res: Restaurantes) => {
        console.table(res)
        setPratos(res)
      })
  }, [id])

  if (!pratos) {
    return <p>Carregando...</p>
  }

  return (
    <>
      <PerfilHeader cards={[pratos]} />
      <Container>
        <MenuList cards={pratos.cardapio} />
      </Container>
    </>
  )
}

export default Perfil
