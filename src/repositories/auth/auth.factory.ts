import { Injectable } from '@nestjs/common'
import { ForgotPasswordCredentialEntity } from 'src/entities/forgot_password_credential.entity'
import { ForgotPasswordCredentialModel } from 'src/models/forgot_password_credential'

@Injectable()
export class AuthFactory {
    constructor() {}

    mapForgotPasswordCredentialEntityToForgotPasswordCredentialModel(
        data: ForgotPasswordCredentialEntity,
    ): ForgotPasswordCredentialModel {
        return {
            id: data.id,
            userId: data.userId,
            password_credentials: data.password_credential,
            isActive: data.is_active,
            expiredDate: data.expiredDate,
            createdBy: data.createdBy,
            updatedBy: data.updatedBy,
            createdDate: data.createdDate,
            updatedDate: data.updatedDate,
        }
    }
}
