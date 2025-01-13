import { CardapioItem } from '../components/MenuList'

export const getTotalPrice = (items: CardapioItem[]) => {
  return items.reduce((acc, valorAtual) => {
    if (valorAtual.preco) {
      return (acc += valorAtual.preco)
    }
    return 0
  }, 0)
}
