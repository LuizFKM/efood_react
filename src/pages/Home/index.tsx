import ProductList from '../../components/ProductList'

import { Container } from '../../styles'
import Header from '../../components/Header'

import { useGetRestaurantesQuery } from '../../services/api'

const Home = () => {
  const { data: restaurantes, isLoading } = useGetRestaurantesQuery()

  // const [restaurantes, setRestaurantes] = useState<Restaurantes[]>([])

  // useEffect(() => {
  //   fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes`)
  //     .then((res) => res.json())
  //     .then((res) => setRestaurantes(res))
  // }, [])
  // console.table(restaurantes)

  if (!restaurantes) {
    return <h2>Carregando...</h2>
  }

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
