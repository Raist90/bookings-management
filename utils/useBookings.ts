export { useBookings }

import { bookings as mockBookings } from "../mocks/bookings"

function useBookings(): Booking[] {
  const errMsg = NO_SERVERSIDE(useBookings.name)
  assert(isBrowser, errMsg)

  const bookings = localStorage.getItem("bookings")

  if (!bookings) {
    return mockBookings
  }

  return JSON.parse(bookings)
}
