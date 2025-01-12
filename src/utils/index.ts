import { CardapioItem } from '../components/MenuList'

export const getTotalPrice = (items: CardapioItem[]) => {
  return items.reduce((acc, valorAtual) => {
    return (acc += valorAtual.preco!)
  }, 0)
}
