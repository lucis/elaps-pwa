export type Checkin = {
  plate: string
  time: number
  info?: string
  model?: string
  ownerName?: string
  videoURL: string
}

export type Action<K, V = void> = V extends void ? { type: K } : { type: K } & V