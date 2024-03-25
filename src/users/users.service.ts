import { Injectable } from '@nestjs/common'
import { Pageable } from 'src/interfaces'
import generateFilterObjectWithContains from 'src/utils/generateFilterObjectWithContains'
import { ExceptFields } from './constants'
import { QueryUserDto } from './dto/get-user.dto'
import { UsersMapper } from './interfaces'
import { getUsersMapper } from './mapper'
import { UsersRepository } from './users.repository'

@Injectable()
export class UsersService {
    constructor(private usersRepository: UsersRepository) {}

    async getUserById(id: number, returnStudent: boolean): Promise<UsersMapper> {
        const user = await this.usersRepository.getUserById(id, returnStudent)
        const mapper = getUsersMapper([user], returnStudent)

        return mapper[0]
    }

    async getUsers(queryUserDto: QueryUserDto): Promise<Pageable<UsersMapper>> {
        const { page, pageSize, returnStudent, orderBy, orderField, role, ...filter } = queryUserDto

        const fiterContains = generateFilterObjectWithContains(filter, ExceptFields)

        const [users, count] = await Promise.all([
            this.usersRepository.getUsers({
                page,
                pageSize,
                returnStudent,
                orderBy,
                orderField,
                role,
                filter: fiterContains,
            }),
            this.usersRepository.countUsers(fiterContains),
        ])
        const mapper = getUsersMapper(users, returnStudent)

        return {
            page,
            pageSize,
            rows: mapper,
            totalRecords: count,
        }
    }
}
