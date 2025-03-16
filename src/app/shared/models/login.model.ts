export interface LoginModel{
    email: string;
    password: string;
}
export interface LoginResponseModel{
  token: string;
  result: ResultLoginModel;
}
export interface ResultLoginModel{
  id: string;
  username: string;
  email: string;
}
