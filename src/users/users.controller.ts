import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common'
import { Pageable, QueryUserDto } from './dto/get-user.dto'
import { UserEntity } from './entities/user.entity'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    async findAll(@Query() queryUserDto: QueryUserDto): Promise<Pageable<UserEntity>> {
        return await this.usersService.getManyUsers(queryUserDto)
    }

    @Get(':id')
    async findById(
        @Param('id', ParseIntPipe) id: number,
        @Query('returnStudent') returnStudent: boolean,
    ): Promise<UserEntity> {
        return await this.usersService.getUserById(id, returnStudent)
    }
}
