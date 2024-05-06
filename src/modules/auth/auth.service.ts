import { Injectable, UnauthorizedException, NotFoundException, OnApplicationBootstrap, OnApplicationShutdown } from "@nestjs/common";
import { SignInDto } from "./dto/auth.dto";
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) {}

    async signIn(signInDto: SignInDto) {
        const user = await this.usersService.findUserByUsername(signInDto.username);

        if (!user) {
            throw new NotFoundException('User not found');
        }

        if (user.password !== signInDto.password) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const payload = { username: user.username, sub: user.id };
        const accessToken = await this.jwtService.signAsync(payload, { expiresIn: '1d' });
        const refreshToken = await this.jwtService.signAsync(payload, { expiresIn: '7d' });

        const expiryDateAccessToken = new Date();
        expiryDateAccessToken.setDate(expiryDateAccessToken.getDate() + 1);

        const expiryDateRefreshToken = new Date();
        expiryDateRefreshToken.setDate(expiryDateRefreshToken.getDate() + 7);

        return {
            accessToken,
            refreshToken,
            expiryDateAccessToken,
            expiryDateRefreshToken
        };
  }

  async validateUser(username: string, password: string) {
    const user = await this.usersService.findUserByUsername(username);

    if (user && user.password === password) {
      return user;
    }

    return null;
  }
}