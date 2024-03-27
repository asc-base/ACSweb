import { Injectable } from '@nestjs/common'
import { CreateExample, ExampleModel } from 'src/models/example'
import { PrismaService } from 'src/providers/databases/prisma/prisma.service'
import { IExampleRepository } from 'src/repositories/example/example.abstract'
import { ExampleFactory } from 'src/repositories/example/example.factory'

@Injectable()
export class ExampleRepository implements IExampleRepository {
    constructor(
        private prisma: PrismaService,
        private exampleFactory: ExampleFactory,
    ) {}

    async getById(id: number): Promise<ExampleModel> {
        const example = await this.prisma.example.findFirstOrThrow({ where: { id } })
        return this.exampleFactory.mapExampleEntityToExampleModel(example)
    }

    async create(body: CreateExample): Promise<ExampleModel> {
        const example = await this.prisma.example.create({
            data: {
                ...body,
                createdBy: -1,
                createdDate: new Date(),
            },
        })
        return this.exampleFactory.mapExampleEntityToExampleModel(example)
    }
}
