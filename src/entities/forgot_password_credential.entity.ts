import { Forgot_password_credential } from '@prisma/client'

export class ForgotPasswordCredentialEntity implements Forgot_password_credential {
    id!: number
    passwordCredential!: string
    isActive!: boolean
    userId!: number
    expiredDate!: Date
    createdDate!: Date
    updatedDate!: Date
    createdBy!: number
    updatedBy!: number | null
}
