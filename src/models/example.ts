import { BaseModel } from 'src/models'

export interface CreateExample {
    name: string
}

export interface ExampleModel extends BaseModel {
    id: number
    name: string
}
