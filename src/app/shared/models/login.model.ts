export interface LoginModel {
  user: User
  token: string
}

export interface User {
  id?: number
  username: string
  password: string
}
