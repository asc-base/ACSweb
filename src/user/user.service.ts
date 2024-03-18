import { Injectable } from '@nestjs/common'
import { UserEntity } from './entities/user.entity'
import { UserRepository } from './user.repository'

@Injectable()
export class UserService {
    constructor(private userRepository: UserRepository) {}

    async getUserById(id: number): Promise<UserEntity | null> {
        return await this.userRepository.getUserById(id)
    }

    async getManyUsers(): Promise<UserEntity[]> {
        return await this.userRepository.getManyUsers()
    }
}
