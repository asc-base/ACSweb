import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  async signIn(@Body() credentials: { username: string; password: string }, @Res() res: any) {
    const tokenResponse = await this.authService.signIn(credentials);
    if (!tokenResponse) {
      return res.status(HttpStatus.UNAUTHORIZED).json({ message: 'Invalid credentials' });
    }
    return res.status(HttpStatus.OK).json(tokenResponse);
  }
}
