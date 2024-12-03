import ProductList from '../../components/ProductList'

import { Container } from '../../styles'
import Header from '../../components/Header'
import { useEffect, useState } from 'react'

export type Restaurantes = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio?: [
    {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurantes[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes`)
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])
  console.table(restaurantes)

  return (
    <>
      <Header />
      <Container>
        <ProductList dishes={restaurantes} />
      </Container>
    </>
  )
}

export default Home
