import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { UserEntity } from 'src/users/entities/user.entity'

@Injectable()
export class UsersRepository {
    constructor(private prisma: PrismaService) {}

    async getManyUsers(
        page: number,
        pageSize: number,
        filter: Record<string, string>,
    ): Promise<UserEntity[]> {
        const users = await this.prisma.users.findMany({
            where: filter,
            take: pageSize,
            skip: (page - 1) * pageSize,
            include: {
                Student: true,
            },
        })

        return users
    }

    async getUserById(id: number): Promise<UserEntity> {
        const user = await this.prisma.users.findUnique({
            where: {
                id,
            },
            include: {
                Student: true,
            },
        })

        if (!user) {
            throw new NotFoundException(`User with id ${id} not found`)
        }

        return user
    }

    async countManyUsers(filter: Record<string, string>): Promise<number> {
        const count = await this.prisma.users.count({
            where: filter,
        })

        return count
    }
}
