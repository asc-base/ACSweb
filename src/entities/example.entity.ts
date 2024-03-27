import { Example } from '@prisma/client'

export class ExampleEntity implements Example {
    id!: number
    name!: string
    createdDate!: Date
    createdBy!: number
    updatedDate!: Date
    updatedBy!: number | null
}
