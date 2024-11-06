import ProductList from '../../components/ProductList'
import Dish from '../../models/Dishes'

import Hioki from '../../assets/images/Hioki_sushi.png'
import Macarrao from '../../assets/images/Macarrao.png'
import { Container } from '../../styles'
import Header from '../../components/Header'

const pratos: Dish[] = [
  {
    id: 1,
    categories: ['Destaque da Semana', 'Japones'],
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: Hioki,
    rate: '4.9',
    title: 'Hioki'
  },
  {
    id: 2,
    categories: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: Macarrao,
    rate: '4.3',
    title: 'La Dolce Vita Trattoria'
  },
  {
    id: 3,
    categories: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: Macarrao,
    rate: '4.3',
    title: 'La Dolce Vita Trattoria'
  },
  {
    id: 4,
    categories: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: Macarrao,
    rate: '4.3',
    title: 'La Dolce Vita Trattoria'
  },
  {
    id: 5,
    categories: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: Macarrao,
    rate: '4.3',
    title: 'La Dolce Vita Trattoria'
  },
  {
    id: 6,
    categories: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: Macarrao,
    rate: '4.3',
    title: 'La Dolce Vita Trattoria'
  }
]

const Home = () => (
  <>
    <Header />
    <Container>
      <ProductList dishes={pratos} />
    </Container>
  </>
)

export default Home
