import Dish from '../../models/Dishes'
import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  dishes: Dish[]
}

const ProductList = ({ dishes }: Props) => (
  <Container>
    <List>
      {dishes.map((dish) => (
        <Product
          key={dish.id}
          categories={dish.categories}
          image={dish.image}
          description={dish.description}
          rate={dish.rate}
          title={dish.title}
        />
      ))}
    </List>
  </Container>
)

export default ProductList
