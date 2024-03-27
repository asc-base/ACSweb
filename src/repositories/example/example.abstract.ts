import { CreateExample, ExampleModel } from 'src/models/example'

export abstract class IExampleRepository {
    abstract create(body: CreateExample): Promise<ExampleModel>
    abstract getById(id: number): Promise<ExampleModel>
}
