import { BaseModel } from 'src/models'

export interface ForgotPasswordCredentialModel extends BaseModel {
    id: number
    password_credentials: string
    isActive: boolean
    userId: number
    expiredDate: Date
}
