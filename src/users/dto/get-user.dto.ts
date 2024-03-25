import { ApiProperty } from '@nestjs/swagger'
import { Transform } from 'class-transformer'
import { IsBoolean, IsEnum, IsNumber, IsOptional, IsString } from 'class-validator'

export enum ORDER_FIELD {
    USERNAME = 'username',
    FIRSTNAME_TH = 'firstnameTh',
    LASTNAME_TH = 'lastnameTh',
    FIRSTNAME_EN = 'firstnameEn',
    LASTNAME_EN = 'lastnameEn',
    EMAIL = 'email',
    PHONE = 'phone',
    ROLE = 'role',
    CREATED_DATE = 'createdDate',
    UPDATED_DATE = 'updatedDate',
}

export enum ORDER_BY {
    ASC = 'asc',
    DESC = 'desc',
}

export class QueryUserDto {
    @ApiProperty({
        required: false,
    })
    @IsString()
    @IsOptional()
    username?: string

    @ApiProperty({
        required: false,
    })
    @IsString()
    @IsOptional()
    firstnameTh?: string

    @ApiProperty({
        required: false,
    })
    @IsString()
    @IsOptional()
    lastnameTh!: string

    @ApiProperty({
        required: false,
    })
    @IsString()
    @IsOptional()
    firstnameEn?: string

    @ApiProperty({
        required: false,
    })
    @IsString()
    @IsOptional()
    lastnameEn!: string

    @ApiProperty({
        required: false,
    })
    @IsString()
    @IsOptional()
    email!: string

    @ApiProperty({
        required: false,
    })
    @IsString()
    @IsOptional()
    phone!: string

    @ApiProperty({
        required: false,
    })
    @IsNumber()
    @Transform(({ value }) => parseInt(value))
    Role!: number

    @ApiProperty()
    @IsNumber()
    @Transform(({ value }) => parseInt(value))
    page!: number

    @ApiProperty()
    @IsNumber()
    @Transform(({ value }) => parseInt(value))
    pageSize!: number

    @ApiProperty({
        required: false,
        enum: ORDER_BY,
        default: ORDER_BY.ASC,
    })
    @IsString()
    @IsOptional()
    @IsEnum(ORDER_BY)
    orderBy: string = ORDER_BY.ASC

    @ApiProperty({
        required: false,
        enum: ORDER_FIELD,
        default: ORDER_FIELD.CREATED_DATE,
    })
    @IsString()
    @IsOptional()
    @IsEnum(ORDER_FIELD)
    orderField: ORDER_FIELD = ORDER_FIELD.CREATED_DATE

    @ApiProperty({
        required: false,
        default: true,
    })
    @IsBoolean()
    @IsOptional()
    @Transform(({ value }) => value === 'true')
    returnStudent!: boolean
}
