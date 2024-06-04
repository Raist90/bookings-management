export type { Booking }

type Customer = {
  age: number
  email: string
  gender: string
  name: string
  phone: string
}

type Booking = {
  customer: Customer
  id: number
  notes?: string
  paymentType: "Credit transfer" | "PayPal" | "Revolut"
  travelId: number
}
