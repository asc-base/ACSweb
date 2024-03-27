import { BaseModel } from 'src/models'

export interface StudentModel extends BaseModel {
    id: number
    userId: number
    studentCode: string
    linkedin?: string
    facebook?: string
    instagram?: string
    github?: string
    yearOfFirstAdmission: number
    yearOfCompletion?: number
    classOf: string
}
