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
import { Pageable } from 'src/interfaces/pageable.interface'
import { QueryUserDto } from './dto/get-user.dto'
import { UserEntity } from './entities/user.entity'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    @UsePipes(new ValidationPipe({ transform: true }))
    async findAll(@Query() queryUserDto: QueryUserDto): Promise<Pageable<UserEntity>> {
        return await this.usersService.getUsers(queryUserDto)
    }

    @Get(':id')
    async findById(
        @Param('id', ParseIntPipe) id: number,
        @Query('returnStudent', ParseBoolPipe) returnStudent: boolean = true,
    ): Promise<UserEntity> {
        return await this.usersService.getUserById(id, returnStudent)
    }
}
