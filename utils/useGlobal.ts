export { useGlobal }

type GlobalCTX = {
  travels: Travel[]
}

async function useGlobal(): Promise<GlobalCTX | undefined> {
  if (!isBrowser) return

  return {
    travels: useTravels(),
  }
}
