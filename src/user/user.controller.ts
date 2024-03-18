import { Controller, Get, Param } from '@nestjs/common'
import { ParamUserDto } from './dto/get-user.dto'
import { UserEntity } from './entities/user.entity'
import { UserService } from './user.service'

@Controller('user')
export class UserController {
    constructor(private readonly usersService: UserService) {}

    @Get('/all')
    async findAll(): Promise<UserEntity[]> {
        return await this.usersService.getManyUsers()
    }

    @Get(':id')
    async findById(@Param() param: ParamUserDto): Promise<UserEntity | null> {
        const id = parseInt(param.id, 10)
        return await this.usersService.getUserById(id)
    }
}
