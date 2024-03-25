import {
    Controller,
    Get,
    Param,
    ParseBoolPipe,
    ParseIntPipe,
    Query,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common'
import { Pageable } from 'src/interfaces'
import { QueryUserDto } from './dto/get-user.dto'
import { UsersMapper } from './interfaces'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    @UsePipes(new ValidationPipe({ transform: true }))
    async getList(@Query() queryUserDto: QueryUserDto): Promise<Pageable<UsersMapper>> {
        return await this.usersService.getUsers(queryUserDto)
    }

    @Get(':id')
    async getById(
        @Param('id', ParseIntPipe) id: number,
        @Query('returnStudent', ParseBoolPipe) returnStudent: boolean = true,
    ): Promise<UsersMapper> {
        return await this.usersService.getUserById(id, returnStudent)
    }
}
