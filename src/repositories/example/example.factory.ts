import { Injectable } from '@nestjs/common'
import { ExampleEntity } from 'src/entities/example.entity'
import { ExampleModel } from 'src/models/example'

@Injectable()
export class ExampleFactory {
    constructor() {}

    mapExampleEntityToExampleModel(data: ExampleEntity): ExampleModel {
        return {
            id: data.id,
            name: data.name,
            createdBy: data.createdBy,
            updatedBy: data.updatedBy,
            createdDate: data.createdDate,
            updatedDate: data.updatedDate,
        }
    }
}
