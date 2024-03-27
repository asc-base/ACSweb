import { Prisma } from '@prisma/client'
import { BaseModel } from 'src/models'
import { StudentModel } from 'src/models/student'

export interface GetUsersOptions {
    page: number
    pageSize: number
    orderBy: string
    orderField: string
    returnStudent: boolean
    role: string
    filter: Prisma.UsersWhereInput
}

export interface UsersModel extends BaseModel {
    id: number
    username: string
    profileUrl: string
    firstnameTh: string
    lastnameTh: string
    firstnameEn: string
    lastnameEn: string
    nickname?: string
    roleId: number
    email: string
    phone: string
    password: string
    role: string
    student?: StudentModel
}
