export class signInModel{
        email!: string
        password!: string
      }

export interface sigInResponseModel{
        _id: string
            firstName: string
            lastName: string
            email: string
            createdAt: string
            updatedAt: string
            __v: number
            token: string
            refreshToken: string
        }