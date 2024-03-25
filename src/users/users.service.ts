import { Injectable } from '@nestjs/common'
import { Pageable } from 'src/interfaces/pageable.interface'
import { QueryUserDto } from './dto/get-user.dto'
import { UserEntity } from './entities/user.entity'
import { UsersRepository } from './users.repository'

@Injectable()
export class UsersService {
    constructor(private usersRepository: UsersRepository) {}

    async getUserById(id: number, returnStudent: boolean): Promise<UserEntity> {
        return await this.usersRepository.getUserById(id, returnStudent)
    }

    async getUsers(queryUserDto: QueryUserDto): Promise<Pageable<UserEntity>> {
        const { page, pageSize, returnStudent, orderBy, orderField, ...filter } = queryUserDto

        const except_fields = ['phone', 'nickname']

        // map to like query
        const likeFilter: Record<string, string> = Object.keys(filter).reduce((acc, key) => {
            if (key === 'Role') {
                return {
                    ...acc,
                    [key]: { id: filter[key as keyof typeof filter] },
                }
            }

            if (except_fields.includes(key)) {
                return {
                    ...acc,
                    [key]: filter[key as keyof typeof filter],
                }
            }

            if (filter[key as keyof typeof filter]) {
                return {
                    ...acc,
                    [key]: {
                        contains: filter[key as keyof typeof filter],
                        mode: 'insensitive',
                    },
                }
            }

            return acc
        }, {})

        const [users, count] = await Promise.all([
            this.usersRepository.getUsers({
                page,
                pageSize,
                returnStudent,
                orderBy,
                orderField,
                filter: likeFilter,
            }),
            this.usersRepository.countUsers(likeFilter),
        ])

        return {
            page,
            pageSize,
            rows: users,
            totalRecords: count,
        }
    }
}
