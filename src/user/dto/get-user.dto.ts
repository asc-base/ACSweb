import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsNumberString } from 'class-validator'

export class ParamUserDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumberString()
    id!: string
}
