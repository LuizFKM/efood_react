import { MenuCardContainer, StyledButton } from './styles'

type Props = {
  id: number
  image: string
  title: string
  description: string
  onClick?: () => void
}

const MenuCard = ({ image, title, description, onClick, id }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 100) {
      return descricao.slice(0, 160) + '...'
    }
    return descricao
  }
  return (
    <>
      <MenuCardContainer key={id}>
        <img src={image} alt="" />
        <h3>{title}</h3>
        <p>{getDescricao(description)}</p>
        <StyledButton
          title="Mais detalhes"
          variant="menuAndCheckout"
          onClick={onClick}
          type="button"
        >
          Mais detalhes
        </StyledButton>
      </MenuCardContainer>
    </>
  )
}

export default MenuCard
