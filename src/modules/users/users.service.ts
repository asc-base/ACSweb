import { Injectable } from '@nestjs/common'
import generateFilterObjectWithContains from 'src/core/utils/generateFilterObjectWithContains'
import { Pageable } from 'src/models'
import { UsersModel } from 'src/models/users'
import { IUsersRepository } from 'src/repositories/users/users.abstract'
import { ExceptFields } from './constants'
import { QueryUserDto } from './dto/get-users.dto'

@Injectable()
export class UsersService {
    constructor(private usersRepository: IUsersRepository) {}

    async getUserById(id: number, returnStudent: boolean): Promise<UsersModel> {
        return await this.usersRepository.geById(id, returnStudent)
    }

    async getUsers(queryUserDto: QueryUserDto): Promise<Pageable<UsersModel>> {
        const { page, pageSize, returnStudent, orderBy, orderField, role, ...filter } = queryUserDto

        const filterContains = generateFilterObjectWithContains(filter, ExceptFields)

        const [users, count] = await Promise.all([
            this.usersRepository.getList({
                page,
                pageSize,
                returnStudent,
                orderBy,
                orderField,
                role,
                filter: filterContains,
            }),
            this.usersRepository.count(filterContains),
        ])

        return {
            page,
            pageSize,
            rows: users,
            totalRecords: count,
        }
    }
}
