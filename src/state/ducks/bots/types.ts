export type FormValues = {
  enable: boolean
  allowedChatsId: Array<number>
  token: string
  name: string
}

export type Bot = {
  id: number
} & FormValues