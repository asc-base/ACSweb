import { ForgotPasswordCredential } from '@prisma/client'

export class ForgotPasswordCredentialEntity implements ForgotPasswordCredential {
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
