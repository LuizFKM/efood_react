import Button from '../Button'

import {
  CardContainer,
  CardContent,
  CardRate,
  CardTitle,
  CategoryInfos
} from './styles'
import Estrela from '../../assets/images/estrela.png'
import { TagContainer } from '../Tag/styles'

type Props = {
  title: string
  categories: string[]
  description: string
  rate: string
  image: string
}

const Product = ({ title, categories, description, rate, image }: Props) => (
  <CardContainer>
    <CategoryInfos>
      {categories.map((category) => (
        <TagContainer key={category}>{category}</TagContainer>
      ))}
    </CategoryInfos>
    <img src={image} alt={title} />
    <CardContent>
      <CardTitle>
        <h3>{title}</h3>
        <CardRate>
          <h3>{rate}</h3>
          <img src={Estrela} alt="" />
        </CardRate>
      </CardTitle>
      <p>{description}</p>
      <Button type="link" to="/produto" title="Saiba mais sobre o prato">
        Saiba Mais
      </Button>
    </CardContent>
  </CardContainer>
)

export default Product
