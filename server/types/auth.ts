export interface LoginRequest {
    email: string
    password: string
  }
  
  export interface LoginResponse {
    accessToken: string
    user: {
      id: string
      email: string
      firstName: string
      lastName: string
    }
  }
  
  export interface JWTPayload {
    sub: string
    email: string
    iat: number
    exp: number
  }