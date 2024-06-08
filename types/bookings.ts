export type { Booking }

type Booking = Zod.infer<typeof bookingSchema>
