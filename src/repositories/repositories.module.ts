import { Module } from '@nestjs/common'
import { PrismaModule } from 'src/providers/databases/prisma/prisma.module'
import { IExampleRepository } from 'src/repositories/example/example.abstract'
import { ExampleFactory } from 'src/repositories/example/example.factory'
import { ExampleRepository } from 'src/repositories/example/example.repository'
import { IUsersRepository } from 'src/repositories/users/users.abstract'
import { UsersFactory } from 'src/repositories/users/users.factory'
import { UsersRepository } from 'src/repositories/users/users.repository'
import { JwtStrategy } from 'src/strategies/jwt.strategy'

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
        UsersFactory,
        ExampleFactory,
        JwtStrategy,
        UsersRepository,
    ],
    exports: [IExampleRepository, IUsersRepository],
})
export class RepositoriesModule {}
