import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { UserEntity } from 'src/user/entities/user.entity'

@Injectable()
export class UserRepository {
    constructor(private prisma: PrismaService) {}

    async getUserById(id: number): Promise<UserEntity | null> {
        const user = await this.prisma.users.findUnique({
            where: {
                id,
            },
        })

        if (!user) {
            throw new NotFoundException(`User with ID ${id} not found`)
        }

        return user
    }

    async getManyUsers(): Promise<UserEntity[]> {
        return await this.prisma.users.findMany()
    }
}
