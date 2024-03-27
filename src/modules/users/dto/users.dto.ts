import { ApiProperty } from '@nestjs/swagger'
import { BaseDto } from 'src/models/dto/base.dto'
import { StudentDto } from 'src/modules/users/dto/student.dto'

export class UsersDto extends BaseDto {
    @ApiProperty()
    id!: number

    @ApiProperty()
    username!: string

    @ApiProperty()
    profileUrl?: string

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
    role!: string

    @ApiProperty()
    student?: StudentDto
}
