import { Module } from '@nestjs/common'
import { UsersFactory } from 'src/modules/users/users.factory'
import { RepositoriesModule } from 'src/repositories/repositories.module'
import { UsersController } from './users.controller'
import { UsersService } from './users.service'

@Module({
    imports: [RepositoriesModule],
    controllers: [UsersController],
    providers: [UsersService, UsersFactory],
})
export class UsersModule {}
