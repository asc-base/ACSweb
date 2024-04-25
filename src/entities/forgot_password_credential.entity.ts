import { Forgot_password_credential } from '@prisma/client'

export class ForgotPasswordCredentialEntity implements Forgot_password_credential {
    id!: number
    password_credential!: string
    is_active!: boolean
    userId!: number
    expiredDate!: Date
    createdDate!: Date
    updatedDate!: Date
    createdBy!: number
    updatedBy!: number | null
}
