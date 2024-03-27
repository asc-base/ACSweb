import { ApiProperty } from '@nestjs/swagger'
import { Transform } from 'class-transformer'
import { IsNumber } from 'class-validator'

export class ExampleQuery {
    @ApiProperty({ required: false })
    @IsNumber()
    @Transform(({ value }) => parseInt(value))
    pageSize!: number
}
