import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common'
import { ExampleDto } from 'src/modules/example/dto/example.dto'
import { ExampleFactory } from 'src/modules/example/example.factory'
import { ExampleService } from 'src/modules/example/example.service'
import { CreateExampleDto } from './dto/create-example.dto'

@Controller('example')
export class ExampleController {
    constructor(
        private exampleService: ExampleService,
        private exampleFactory: ExampleFactory,
    ) {}

    @Post()
    async create(@Body() body: CreateExampleDto): Promise<ExampleDto> {
        const example = await this.exampleService.createExample(body)
        return this.exampleFactory.mapExampleModelToExampleDto(example)
    }

    @Get('/:id')
    async getById(@Param('id', ParseIntPipe) id: number): Promise<ExampleDto> {
        const example = await this.exampleService.getExampleById(id)
        return this.exampleFactory.mapExampleModelToExampleDto(example)
    }
}
