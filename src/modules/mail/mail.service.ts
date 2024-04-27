import { ISendMailOptions, MailerService } from '@nestjs-modules/mailer'
import { Injectable } from '@nestjs/common'

@Injectable()
export class MailService {
    constructor(private mailerService: MailerService) {}

    async sendUserConfirmation(option: ISendMailOptions): Promise<void> {
        await this.mailerService.sendMail(option)
    }
}
