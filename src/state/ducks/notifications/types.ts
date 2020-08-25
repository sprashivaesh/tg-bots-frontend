export type NotificationValues = {
  type: 'info' | 'success' | 'warning' | 'danger'
  message: string
}
export type Notification = NotificationValues & {id: number}
