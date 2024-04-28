import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsOptional, IsString } from 'class-validator'

export class ForgotPasswordDto {
    @ApiProperty({
        required: true,
    })
    @IsEmail()
    @IsString()
    @IsOptional()
    email!: string
}

export class mailDto {
    to!: string
    from!: string
    subject!: string
    text!: string
}
