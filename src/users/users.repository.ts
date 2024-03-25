import { Injectable, NotFoundException } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service'
import { UserEntity } from 'src/users/entities/user.entity'
import calculatePagination from 'src/utils/calculatePagination'
import { GetUsersOptions } from './interfaces'

@Injectable()
export class UsersRepository {
    constructor(private prisma: PrismaService) {}

    async getUsers(options: GetUsersOptions): Promise<UserEntity[]> {
        const { page, pageSize, orderBy, orderField, returnStudent, role, filter } = options

        const users = await this.prisma.users.findMany({
            where: {
                ...filter,
                Role: {
                    name: role,
                },
            },
            take: pageSize,
            skip: calculatePagination(page, pageSize),
            include: {
                Student: returnStudent,
                Role: true,
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
                Role: true,
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
