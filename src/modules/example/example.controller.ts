import {
    Body,
    Controller,
    FileTypeValidator,
    Get,
    MaxFileSizeValidator,
    Param,
    ParseFilePipe,
    ParseIntPipe,
    Post,
    UploadedFile,
    UseInterceptors,
} from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { File } from 'src/models'
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

    @Post('/upload')
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(
        @UploadedFile(
            new ParseFilePipe({
                fileIsRequired: true,
                validators: [
                    new FileTypeValidator({ fileType: /\/(jpg|jpeg|png)$/ }),
                    new MaxFileSizeValidator({ maxSize: 1024 * 1024 }),
                ],
            }),
        )
        file: File,
    ): Promise<string> {
        return this.exampleService.uploadFile(file)
    }
}
