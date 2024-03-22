import { Student, Users } from '@prisma/client'

export class UserEntity implements Users {
    id!: number
    username!: string
    profileUrl!: string | null
    firstnameTh!: string | null
    lastnameTh!: string | null
    firstnameEn!: string | null
    lastnameEn!: string | null
    nickname!: string | null
    email!: string
    phone!: string
    password!: string
    roleId!: number
    createdDate!: Date
    createdBy!: number
    updatedDate!: Date
    updatedBy!: number | null

    student?: Student | null
}
