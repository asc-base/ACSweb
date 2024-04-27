import { ForgotPasswordCredentialModel } from 'src/models/forgotPasswordCredential'

export abstract class IAuthRepository {
    abstract createForgotPasswordCredentials(userId: number): Promise<ForgotPasswordCredentialModel>
}
