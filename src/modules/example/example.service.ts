import { Injectable } from '@nestjs/common'
import { ExampleModel } from 'src/models/example'
import { CreateExampleDto } from 'src/modules/example/dto/create-example.dto'
import { IExampleRepository } from 'src/repositories/example/example.abstract'

@Injectable()
export class ExampleService {
    constructor(private exampleRepository: IExampleRepository) {}

    async createExample({ name }: CreateExampleDto): Promise<ExampleModel> {
        return await this.exampleRepository.create({ name })
    }

    async getExampleById(id: number): Promise<ExampleModel> {
        return await this.exampleRepository.getById(id)
    }
}
