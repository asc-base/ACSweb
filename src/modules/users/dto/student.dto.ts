import { ApiProperty } from '@nestjs/swagger'
import { BaseDto } from 'src/models/dto/base.dto'

export class StudentDto extends BaseDto {
    @ApiProperty()
    id!: number

    @ApiProperty()
    userId!: number

    @ApiProperty()
    studentCode!: string

    @ApiProperty()
    linkedin?: string | null

    @ApiProperty()
    facebook?: string | null

    @ApiProperty()
    instagram?: string | null

    @ApiProperty()
    github?: string | null

    @ApiProperty()
    yearOfFirstAdmission!: number

    @ApiProperty()
    yearOfCompletion?: number | null

    @ApiProperty()
    classOf!: string
}
