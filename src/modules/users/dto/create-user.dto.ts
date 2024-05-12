import { ApiProperty } from '@nestjs/swagger'
import { BaseDto } from 'src/models/dto/base.dto'
import { StudentDto } from './student.dto'

export class CreateUserDto extends BaseDto {
    @ApiProperty()
    username!: string

    @ApiProperty()
    profile!: string

    @ApiProperty()
    firstnameTh!: string

    @ApiProperty()
    lastnameTh!: string

    @ApiProperty()
    firstnameEn!: string

    @ApiProperty()
    lastnameEn!: string

    @ApiProperty()
    nickname?: string

    @ApiProperty()
    email!: string

    @ApiProperty()
    phone!: string

    @ApiProperty()
    password!: string

    @ApiProperty()
    roleId!: string

    @ApiProperty()
    student?: StudentDto
}
