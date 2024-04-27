import { Injectable } from '@nestjs/common'
import { default as dayjs } from 'dayjs'
import { ForgotPasswordCredentialModel } from 'src/models/forgotPasswordCredential'
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

    async createForgotPasswordCredentials(userId: number): Promise<ForgotPasswordCredentialModel> {
        const minuteLeft = 5
        const expiredDate = dayjs().add(minuteLeft, 'minute').toDate()

        const creds = await this.prisma.forgotPasswordCredential.create({
            data: {
                userId,
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
