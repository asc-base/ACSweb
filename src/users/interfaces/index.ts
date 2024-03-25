import { Prisma, Student } from '@prisma/client'

export interface GetUsersOptions {
    page: number
    pageSize: number
    orderBy: string
    orderField: string
    returnStudent: boolean
    role: string
    filter: Prisma.UsersWhereInput
}

export interface UsersMapper {
    id: number
    username: string
    profileUrl: string | null
    firstnameTh: string | null
    lastnameTh: string | null
    firstnameEn: string | null
    lastnameEn: string | null
    nickname: string | null
    email: string
    phone: string
    role: string
    createdDate: Date
    createdBy: number
    updatedDate: Date
    updatedBy: number | null

    student?: Student
}
