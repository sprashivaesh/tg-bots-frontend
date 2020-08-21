export type AutoAnswer = {
  id: number
  created_at: string
  updated_at: string
} & FormValues

export type FormValues = {
  private: boolean
  coincidences: string
  answers: string
}