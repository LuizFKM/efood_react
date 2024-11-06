import { MenuCardContainer } from './styles'

import { ButtonContainer } from '../Button/style'

type Props = {
  image: string
  title: string
  description: string
}

const MenuCard = ({ image, title, description }: Props) => (
  <>
    <MenuCardContainer>
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>{description}</p>
      <ButtonContainer type="button">Adicionar ao carrinho</ButtonContainer>
    </MenuCardContainer>
  </>
)

export default MenuCard
