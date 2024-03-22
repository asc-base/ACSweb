import { Injectable } from '@nestjs/common'
import { Pageable, QueryUserDto } from './dto/get-user.dto'
import { UserEntity } from './entities/user.entity'
import { UsersRepository } from './users.repository'

@Injectable()
export class UsersService {
    constructor(private usersRepository: UsersRepository) {}

    async getUserById(id: number): Promise<UserEntity> {
        return await this.usersRepository.getUserById(id)
    }

    async getManyUsers(queryUserDto: QueryUserDto): Promise<Pageable<UserEntity>> {
        const { page, pageSize, ...filter } = queryUserDto

        // map to like query
        const likeFilter: Record<string, string> = Object.keys(filter).reduce((acc, key) => {
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

        const users = await this.usersRepository.getManyUsers(page, pageSize, likeFilter)
        const count = await this.usersRepository.countManyUsers(likeFilter)

        return {
            rows: users,
            page: queryUserDto.page,
            pageSize: queryUserDto.pageSize,
            totalRecords: count,
        }
    }
}
