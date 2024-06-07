export { useGlobal }

type GlobalCTX = {
  bookings: Booking[]
  travels: Travel[]
}

async function useGlobal(): Promise<GlobalCTX | undefined> {
  if (!isBrowser) return

  return {
    bookings: useBookings(),
    travels: useTravels(),
  }
}
