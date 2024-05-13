import { Module } from '@nestjs/common'
import { ExampleFactory } from 'src/modules/example/example.factory'
import { ExampleService } from 'src/modules/example/example.service'
import { FireStorageModule } from 'src/providers/storage/firestorage.module'
import { RepositoriesModule } from 'src/repositories/repositories.module'
import { ExampleController } from './example.controller'

@Module({
    imports: [RepositoriesModule, FireStorageModule],
    controllers: [ExampleController],
    providers: [ExampleService, ExampleFactory],
})
export class ExampleModule {}
