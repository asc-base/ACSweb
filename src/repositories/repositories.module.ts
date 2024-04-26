import { Module } from '@nestjs/common'
import { PrismaModule } from 'src/providers/databases/prisma/prisma.module'
import { IExampleRepository } from 'src/repositories/example/example.abstract'
import { ExampleFactory } from 'src/repositories/example/example.factory'
import { ExampleRepository } from 'src/repositories/example/example.repository'
import { IUsersRepository } from 'src/repositories/users/users.abstract'
import { UsersFactory } from 'src/repositories/users/users.factory'
import { UsersRepository } from 'src/repositories/users/users.repository'
import { IAuthRepository } from './auth/auth.abstarct'
import { AuthFactory } from './auth/auth.factory'
import { AuthRepository } from './auth/auth.repository'

@Module({
    imports: [PrismaModule],
    providers: [
        {
            provide: IExampleRepository,
            useClass: ExampleRepository,
        },
        {
            provide: IUsersRepository,
            useClass: UsersRepository,
        },
        {
            provide: IAuthRepository,
            useClass: AuthRepository,
        },
        UsersFactory,
        AuthFactory,
        ExampleFactory,
    ],
    exports: [IExampleRepository, IUsersRepository, IAuthRepository],
})
export class RepositoriesModule {}
