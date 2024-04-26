import { BaseModel } from 'src/models'

export interface ForgotPasswordCredentialModel extends BaseModel {
    id: number
    passwordCredential: string
    isActive: boolean
    userId: number
    expiredDate: Date
}
