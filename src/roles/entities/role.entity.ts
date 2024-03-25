import { Role } from '@prisma/client'

export class RoleEntity implements Role {
    id!: number
    name!: string
    createdDate!: Date
    updatedDate!: Date
    createdBy!: number
    updatedBy!: number | null
}
