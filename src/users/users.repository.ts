import { Injectable, NotFoundException } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service'
import { UserEntity } from 'src/users/entities/user.entity'
import calculatePagination from 'src/utils/calculatePagination'

@Injectable()
export class UsersRepository {
    constructor(private prisma: PrismaService) {}

    async getUsers(
        page: number,
        pageSize: number,
        filter: Prisma.UsersWhereInput,
    ): Promise<UserEntity[]> {
        const users = await this.prisma.users.findMany({
            where: filter,
            take: pageSize,
            skip: calculatePagination(page, pageSize),
            include: {
                Student: true,
            },
        })

        return users
    }

    async getUserById(id: number, returnStudent: boolean): Promise<UserEntity> {
        const user = await this.prisma.users.findUnique({
            where: {
                id,
            },
            include: {
                Student: returnStudent,
            },
        })

        if (!user) {
            throw new NotFoundException(`User with id ${id} not found`)
        }

        return user
    }

    async countUsers(filter: Prisma.UsersWhereInput): Promise<number> {
        const count = await this.prisma.users.count({
            where: filter,
        })

        return count
    }
}
