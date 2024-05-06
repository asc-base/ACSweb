import {
    Controller,
    Get,
    Param,
    ParseBoolPipe,
    ParseIntPipe,
    Query,
    UseGuards,
} from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { ApiBearerAuth } from '@nestjs/swagger'
import { Pageable } from 'src/models'
import { UsersModel } from 'src/models/users'
import { UsersDto } from 'src/modules/users/dto/users.dto'
import { UsersFactory } from 'src/modules/users/users.factory'
import { GetUser } from 'src/shared/decorators/get-user.decorator'
import { QueryUserDto } from './dto/get-users.dto'
import { UsersService } from './users.service'

@Controller('users')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth('access-token')
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

    @Get('/me')
    async getMe(@GetUser() user: UsersModel): Promise<UsersDto> {
        const userData = await this.usersService.getUserById(user.id, true)

        return this.usersFactory.mapUsersModelToUsersDto(userData)
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
