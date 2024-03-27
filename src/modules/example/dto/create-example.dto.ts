import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'

export class CreateExampleDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name!: string
}
