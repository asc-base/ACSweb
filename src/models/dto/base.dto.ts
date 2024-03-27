import { ApiProperty } from '@nestjs/swagger'

export class BaseDto {
    @ApiProperty()
    createdDate?: Date

    @ApiProperty()
    createdBy?: number

    @ApiProperty()
    updatedDate?: Date

    @ApiProperty()
    updatedBy?: number | null
}
