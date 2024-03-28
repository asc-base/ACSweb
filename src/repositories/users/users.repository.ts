import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import calculatePagination from 'src/core/utils/calculatePagination'
import { GetUsersOptions, UsersModel } from 'src/models/users'
import { PrismaService } from 'src/providers/databases/prisma/prisma.service'
import { IUsersRepository } from 'src/repositories/users/users.abstract'
import { UsersFactory } from 'src/repositories/users/users.factory'

@Injectable()
export class UsersRepository implements IUsersRepository {
    constructor(
        private prisma: PrismaService,
        private usersFactory: UsersFactory,
    ) {}

    async getList(options: GetUsersOptions): Promise<UsersModel[]> {
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

        return this.usersFactory.mapUsersEntitiesToUsersModels(users)
    }

    async geById(id: number, returnStudent: boolean): Promise<UsersModel> {
        const user = await this.prisma.users.findFirstOrThrow({
            where: {
                id,
            },
            include: {
                Student: returnStudent,
                Role: true,
            },
        })

        return this.usersFactory.mapUsersEntityToUsersModel(user)
    }

    async count(filter: Prisma.UsersWhereInput): Promise<number> {
        const count = await this.prisma.users.count({
            where: filter,
        })

        return count
    }
}
