import { Controller, Get, Param, ParseBoolPipe, ParseIntPipe, Query } from '@nestjs/common'
import { Pageable } from 'src/models'
import { UsersDto } from 'src/modules/users/dto/users.dto'
import { UsersFactory } from 'src/modules/users/users.factory'
import { QueryUserDto } from './dto/get-users.dto'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService,
        private readonly usersFactory: UsersFactory,
    ) {}

    @Get()
    async getList(@Query() queryUserDto: QueryUserDto): Promise<Pageable<UsersDto>> {
        const { rows, ...rest } = await this.usersService.getUsers(queryUserDto)

        return {
            ...rest,
            rows: this.usersFactory.mapUsersModelsToUsersDtos(rows),
        }
    }

    @Get(':id')
    async getById(
        @Param('id', ParseIntPipe) id: number,
        @Query('returnStudent', ParseBoolPipe) returnStudent: boolean = true,
    ): Promise<UsersDto> {
        const user = await this.usersService.getUserById(id, returnStudent)
        return this.usersFactory.mapUsersModelToUsersDto(user)
    }
}
