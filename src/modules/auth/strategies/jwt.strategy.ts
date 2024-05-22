import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { UsersModel } from 'src/models/users'
import { UsersFactory } from 'src/repositories/users/users.factory'
import { UsersRepository } from 'src/repositories/users/users.repository'
import { JwtPayload } from './jwt.payload'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        private readonly userRepository: UsersRepository,
        private readonly userFactory: UsersFactory,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET,
        })
    }

    async validate(payload: JwtPayload): Promise<UsersModel> {
        const { id } = payload
        const user = await this.userRepository.getById(id, false)

        return user
    }
}
