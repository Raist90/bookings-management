export type { Travel }

type Travel = Zod.infer<typeof travelSchema>
