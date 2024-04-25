import { MailerService } from '@nestjs-modules/mailer'
import { Injectable } from '@nestjs/common'
import { TimeStampModel } from 'src/models'
import { IUsersRepository } from 'src/repositories/users/users.abstract'
import { ForgotPasswordDto } from './dto/forgot-password.dto'

@Injectable()
export class AuthService {
    constructor(
        private readonly usersRepository: IUsersRepository,
        private readonly mailService: MailerService,
    ) {}

    async forgotPassword(forgotPasswordDto: ForgotPasswordDto): Promise<TimeStampModel> {
        const { email } = forgotPasswordDto
        const user = await this.usersRepository.getByEmail(email, false)

        if (user) {
            try {
                await this.mailService.sendMail({
                    to: email,
                    from: process.env.DEFAULT_EMAIL_FROM,
                    subject: 'Forgot Password',
                    text: `Forgot Password link: www.google.com`,
                })
            } catch (error) {
                console.log(error)
            }
        }

        return { timestamp: new Date() }
    }
}
