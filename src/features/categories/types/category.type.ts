export type Category = {
  _id: string
  name: string
  slug: string
  image: string
  createdAt: string
  updatedAt: string
}

export type Metadata = {
  currentPage: number
  numberOfPages: number
  limit: number
}

export type CategoriesResponse = {
  results: number
  metadata: Metadata
  data: Category[]
}