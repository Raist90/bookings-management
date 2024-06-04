export { useTravels }

import { travels as mockTravels } from "../mocks/travels"

function useTravels(): Travel[] {
  const errMsg = NO_SERVERSIDE(useTravels.name)
  assert(isBrowser, errMsg)

  const travels = localStorage.getItem("travels")

  if (!travels) {
    return mockTravels
  }

  return JSON.parse(travels)
}
