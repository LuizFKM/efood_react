import Loader from '../Loader'
import Product from '../Product'
import { List } from './styles'

export type Props = {
  dishes: Restaurantes[]
  isLoading?: boolean
}

const ProductList = ({ dishes, isLoading }: Props) => {
  if (isLoading) {
    return <Loader />
  }
  return (
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
          cardapio={dish.cardapio}
        />
      ))}
    </List>
  )
}

export default ProductList
