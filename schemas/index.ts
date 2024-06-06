export { travelSchema }

const travelSchema = z.object({
  averageRating: z.number(),
  departureDate: z.string(),
  description: z.string(),
  id: z.number(),
  images: z.array(
    z.object({
      alt: z.string(),
      src: z.string(),
    }),
  ),
  name: z.string(),
  price: z.number(),
  returnDate: z.string(),
})
