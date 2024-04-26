import { Injectable } from '@nestjs/common'
import GenerateMinuteLeft from 'src/core/utils/generateMinuteLeft'
import { ForgotPasswordCredentialModel } from 'src/models/forgot_password_credential'
import { PrismaService } from 'src/providers/databases/prisma/prisma.service'
import { v4 as uuid } from 'uuid'
import { IAuthRepository } from './auth.abstarct'
import { AuthFactory } from './auth.factory'

@Injectable()
export class AuthRepository implements IAuthRepository {
    constructor(
        private prisma: PrismaService,
        private authFactory: AuthFactory,
    ) {}

    async createForgotPasswordCredentials(user_id: number): Promise<ForgotPasswordCredentialModel> {
        const expiredDate = GenerateMinuteLeft(5)

        const creds = await this.prisma.forgot_password_credential.create({
            data: {
                userId: user_id,
                passwordCredential: uuid(),
                isActive: true,
                expiredDate: expiredDate,
                createdBy: -1,
                createdDate: new Date(),
            },
        })

        return this.authFactory.mapForgotPasswordCredentialEntityToForgotPasswordCredentialModel(
            creds,
        )
    }
}
