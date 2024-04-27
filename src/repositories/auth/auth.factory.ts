import { Injectable } from '@nestjs/common'
import { ForgotPasswordCredentialEntity } from 'src/entities/forgotPasswordCredential.entity'
import { ForgotPasswordCredentialModel } from 'src/models/forgotPasswordCredential'

@Injectable()
export class AuthFactory {
    constructor() {}

    mapForgotPasswordCredentialEntityToForgotPasswordCredentialModel(
        data: ForgotPasswordCredentialEntity,
    ): ForgotPasswordCredentialModel {
        return {
            id: data.id,
            userId: data.userId,
            passwordCredential: data.passwordCredential,
            isActive: data.isActive,
            expiredDate: data.expiredDate,
            createdBy: data.createdBy,
            updatedBy: data.updatedBy,
            createdDate: data.createdDate,
            updatedDate: data.updatedDate,
        }
    }
}
