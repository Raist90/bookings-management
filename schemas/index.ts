export { bookingSchema, travelSchema }

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

const bookingSchema = z.object({
  customer: z.object({
    age: z.number(),
    email: z.string(),
    gender: z.string(),
    name: z.string(),
    phone: z.string(),
  }),
  id: z.number(),
  notes: z.string().optional(),
  paymentType: z.union([
    z.literal("Credit transfer"),
    z.literal("PayPal"),
    z.literal("Revolut"),
  ]),
  travelId: z.number(),
})
