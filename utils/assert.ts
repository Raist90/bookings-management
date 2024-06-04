export { assert }

function assert(condition: unknown, msg?: unknown): asserts condition {
  if (condition) return

  const typeOfLog = isBrowser ? "console" : "server"
  const defaultErrMsg = `Something went wrong. Check the ${typeOfLog} log for more information.`

  if (isDevelopment) {
    const stringifiedMsg = isString(msg) ? msg : JSON.stringify(msg)
    const errMsg = msg ? stringifiedMsg : defaultErrMsg

    console.error(msg)

    throw createError({
      statusCode: 500,
      statusMessage: errMsg,
    })
  }

  throw createError({
    statusCode: 500,
  })
}
