import { Restaurantes } from '../../pages/Home'
import Product from '../Product'
import { List } from './styles'

export type Props = {
  dishes: Restaurantes[]
}

const ProductList = ({ dishes }: Props) => (
  <List>
    {dishes.map((dish) => (
      <Product
        key={dish.id}
        tipo={dish.tipo}
        capa={dish.capa}
        descricao={dish.descricao}
        avaliacao={dish.avaliacao}
        titulo={dish.titulo}
        destacado={dish.destacado}
        id={dish.id}
      />
    ))}
  </List>
)

export default ProductList
