class Dish {
  categories: string[]
  image: string
  description: string
  rate: string
  title: string
  id: number

  constructor(
    id: number,
    title: string,
    rate: string,
    description: string,
    image: string,
    categories: string[]
  ) {
    this.id = id
    this.title = title
    this.rate = rate
    this.description = description
    this.image = image
    this.categories = categories
  }
}

export default Dish
