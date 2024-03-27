import { Module } from '@nestjs/common'
import { PrismaModule } from 'src/providers/databases/prisma/prisma.module'
import { IExampleRepository } from 'src/repositories/example/example.abstract'
import { ExampleFactory } from 'src/repositories/example/example.factory'
import { ExampleRepository } from 'src/repositories/example/example.repository'
import { IUsersRepository } from 'src/repositories/users/users.abstract'
import { UsersRepository } from 'src/repositories/users/users.repository'
import { UsersFactory } from 'src/repositories/users/uses.factory'

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
    ],
    exports: [IExampleRepository, IUsersRepository],
})
export class RepositoriesModule {}
