import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'

export class ParamUserDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    id!: number
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
    @IsString()
    @IsOptional()
    role!: string

    @ApiProperty()
    @IsNumber()
    page!: number

    @ApiProperty()
    @IsNumber()
    pageSize!: number
}

export interface Pageable<T> {
    rows: T[]
    totalRecords: number
    page: number
    pageSize: number
}
