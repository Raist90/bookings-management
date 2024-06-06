export type { Travel }

type Travel = {
  averageRating: number
  departureDate: string
  description: string
  id: number
  /** @todo Maybe make this one a single image */
  images: Image[]
  name: string
  price: number
  returnDate: string
}
