import { Injectable } from '@nestjs/common'
import { ExampleModel } from 'src/models/example'
import { ExampleDto } from 'src/modules/example/dto/example.dto'

@Injectable()
export class ExampleFactory {
    constructor() {}

    mapExampleModelToExampleDto(data: ExampleModel): ExampleDto {
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
