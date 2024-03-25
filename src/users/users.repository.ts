import { Injectable, NotFoundException } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service'
import { UserEntity } from 'src/users/entities/user.entity'
import calculatePagination from 'src/utils/calculatePagination'

interface GetUsersOptions {
    page: number
    pageSize: number
    orderBy: string
    orderField: string
    returnStudent: boolean
    filter: Prisma.UsersWhereInput
}

@Injectable()
export class UsersRepository {
    constructor(private prisma: PrismaService) {}

    async getUsers(options: GetUsersOptions): Promise<UserEntity[]> {
        const { page, pageSize, orderBy, orderField, returnStudent, filter } = options

        const users = await this.prisma.users.findMany({
            where: filter,
            take: pageSize,
            skip: calculatePagination(page, pageSize),
            include: {
                Student: returnStudent,
            },
            orderBy: {
                [orderField]: orderBy,
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

        // wait for fix problem findOrThrow
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
