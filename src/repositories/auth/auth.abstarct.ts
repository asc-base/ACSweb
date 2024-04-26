import { ForgotPasswordCredentialModel } from 'src/models/forgot_password_credential'

export abstract class IAuthRepository {
    abstract createForgotPasswordCredentials(
        user_id: number,
    ): Promise<ForgotPasswordCredentialModel>
}
