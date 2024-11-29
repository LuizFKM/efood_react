import { MenuCardContainer } from './styles'

import { ButtonContainer } from '../Button/style'

type Props = {
  image: string
  title: string
  description: string
}

const MenuCard = ({ image, title, description }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 100) {
      return descricao.slice(0, 160) + '...'
    }
    return descricao
  }
  return (
    <>
      <MenuCardContainer>
        <img src={image} alt="" />
        <h3>{title}</h3>
        <p>{getDescricao(description)}</p>
        <ButtonContainer type="button">Mais detalhes</ButtonContainer>
      </MenuCardContainer>
    </>
  )
}

export default MenuCard
