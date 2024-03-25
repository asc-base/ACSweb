import { ApiProperty } from '@nestjs/swagger'
import { Transform } from 'class-transformer'
import { IsBoolean, IsEnum, IsNumber, IsOptional, IsString } from 'class-validator'
import { ORDER_BY, ORDER_FIELD, ROLE } from '../constants'

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
        enum: ROLE,
    })
    @IsString()
    @IsOptional()
    role!: ROLE

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
