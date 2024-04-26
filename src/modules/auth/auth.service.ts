import { MailerService } from '@nestjs-modules/mailer'
import { Injectable } from '@nestjs/common'
import GenerateForgotPasswordMail from 'src/core/utils/generateForgotPasswordMail'
import { TimeStampModel } from 'src/models'
import { IAuthRepository } from 'src/repositories/auth/auth.abstarct'
import { IUsersRepository } from 'src/repositories/users/users.abstract'
import { ForgotPasswordDto } from './dto/forgot-password.dto'

@Injectable()
export class AuthService {
    constructor(
        private readonly usersRepository: IUsersRepository,
        private readonly authRepository: IAuthRepository,
        private readonly mailService: MailerService,
    ) {}

    async forgotPassword(forgotPasswordDto: ForgotPasswordDto): Promise<TimeStampModel> {
        const { email } = forgotPasswordDto
        const user = await this.usersRepository.getByEmail(email, false)

        if (user) {
            const credentail = await this.authRepository.createForgotPasswordCredentials(user.id)

            console.table(credentail)

            if (credentail) {
                await this.mailService.sendMail({
                    to: email,
                    from: process.env.DEFAULT_EMAIL_FROM,
                    subject: 'Forgot Password',
                    html: GenerateForgotPasswordMail('www.google.com'),
                })
            }
        }

        return { timestamp: new Date() }
    }
}
