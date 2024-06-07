export { APP_NAME, NO_CLIENTSIDE, NO_SERVERSIDE }

const APP_NAME = "WeRoad Test"

// error messages
function NO_SERVERSIDE(funcName: string): string {
  return `You are using ${funcName} on server while it is meant to be used only clientside`
}

function NO_CLIENTSIDE(funcName: string): string {
  return `You are using ${funcName} on client while it is meant to be used only serverside`
}
