export { useGlobal }

import { navigation as mockNavigation } from "../mocks/navigation"

type GlobalCTX = {
  bookings: Booking[]
  navigation: Navigation
  travels: Travel[]
}

async function useGlobal(): Promise<GlobalCTX | undefined> {
  if (!isBrowser) return

  return {
    navigation: mockNavigation,
    bookings: useBookings(),
    travels: useTravels(),
  }
}
