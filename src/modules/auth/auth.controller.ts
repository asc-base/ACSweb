import { Body, Controller, Post } from '@nestjs/common'
import { TimeStampModel } from 'src/models'
import { AuthService } from './auth.service'
import { ForgotPasswordDto } from './dto/forgot-password.dto'

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('forgot-password')
    async forgotPassword(@Body() forgotPasswordDto: ForgotPasswordDto): Promise<TimeStampModel> {
        return this.authService.forgotPassword(forgotPasswordDto)
    }
}
