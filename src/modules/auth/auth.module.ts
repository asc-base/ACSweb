import { Module } from '@nestjs/common'
import { AuthFactory } from 'src/repositories/auth/auth.factory'
import { RepositoriesModule } from 'src/repositories/repositories.module'
import { MailModule } from '../mail/mail.module'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'

@Module({
    imports: [RepositoriesModule, MailModule],
    controllers: [AuthController],
    providers: [AuthService, AuthFactory],
})
export class AuthModule {}
