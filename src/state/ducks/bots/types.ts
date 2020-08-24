export type FormValues = {
  enable: boolean
  allowedChatsId: Array<number>
  token: string
}

export type Bot = {
  id: number
} & FormValues