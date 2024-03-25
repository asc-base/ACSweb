import { Users } from '@prisma/client'
import { RoleEntity } from 'src/roles/entities/role.entity'
import { StudentEntity } from 'src/students/entities/student.entity'

export class UserEntity implements Users {
    id!: number
    username!: string
    profileUrl!: string | null
    firstnameTh!: string | null
    lastnameTh!: string | null
    firstnameEn!: string | null
    lastnameEn!: string | null
    nickname!: string | null
    roleId!: number
    email!: string
    phone!: string
    password!: string
    createdDate!: Date
    createdBy!: number
    updatedDate!: Date
    updatedBy!: number | null

    Role?: RoleEntity | null
    student?: StudentEntity | null
}
