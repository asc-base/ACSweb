import { Student } from '@prisma/client'

export class StudentEntity implements Student {
    id!: number
    userId!: number
    studentCode!: string
    linkedin!: string | null
    facebook!: string | null
    instagram!: string | null
    github!: string | null
    yearOfFirstAdmission!: number
    yearOfCompletion!: number | null
    classOf!: string
    createdDate!: Date
    updatedDate!: Date
    createdBy!: number
    updatedBY!: number | null
}
