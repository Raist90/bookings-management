export {
  APP_NAME,
  BOOKINGS_ROUTE,
  NO_CLIENTSIDE,
  NO_SERVERSIDE,
  PICSUM_URL,
  TRAVELS_ROUTE,
}

const APP_NAME = "WeRoad Test"
const PICSUM_URL = "https://picsum.photos"

// routes
const BOOKINGS_ROUTE = "/bookings"
const TRAVELS_ROUTE = "/"

// error messages
function NO_SERVERSIDE(funcName: string): string {
  return `You are using ${funcName} on server while it is meant to be used only clientside`
}

function NO_CLIENTSIDE(funcName: string): string {
  return `You are using ${funcName} on client while it is meant to be used only serverside`
}
