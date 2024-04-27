import { ISendMailOptions } from '@nestjs-modules/mailer'
import { Injectable } from '@nestjs/common'
import { default as dayjs } from 'dayjs'
import { TimeStampModel } from 'src/models'
import { IAuthRepository } from 'src/repositories/auth/auth.abstarct'
import { IUsersRepository } from 'src/repositories/users/users.abstract'
import { MailService } from '../mail/mail.service'
import { ForgotPasswordDto } from './dto/forgot-password.dto'

@Injectable()
export class AuthService {
    constructor(
        private readonly usersRepository: IUsersRepository,
        private readonly authRepository: IAuthRepository,
        private readonly mailService: MailService,
    ) {}

    async forgotPassword(forgotPasswordDto: ForgotPasswordDto): Promise<TimeStampModel> {
        const { email } = forgotPasswordDto
        const user = await this.usersRepository.getByEmail(email, false)

        const credentail = await this.authRepository.createForgotPasswordCredentials(user.id)

        if (credentail) {
            const url = `${process.env.FRONTEND_URL}/reset-password?token=${credentail.passwordCredential}`

            const sendMailOption: ISendMailOptions = {
                to: email,
                subject: 'Forgot Password',
                template: './forgotPassword',
                context: {
                    url,
                },
            }

            await this.mailService.sendUserConfirmation(sendMailOption)
        }

        return {
            timestamp: dayjs().toDate(),
        }
    }
}
