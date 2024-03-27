import { Injectable } from '@nestjs/common'
import { StudentModel } from 'src/models/student'
import { UsersModel } from 'src/models/users'
import { StudentDto } from 'src/modules/users/dto/student.dto'
import { UsersDto } from 'src/modules/users/dto/users.dto'

@Injectable()
export class UsersFactory {
    constructor() {}

    mapUsersModelsToUsersDtos(list: UsersModel[]): UsersDto[] {
        return list.map((data) => this.mapUsersModelToUsersDto(data))
    }

    mapUsersModelToUsersDto(data: UsersModel): UsersDto {
        return {
            id: data.id,
            username: data.username,
            profileUrl: data.profileUrl,
            firstnameTh: data.firstnameTh,
            lastnameTh: data.lastnameTh,
            firstnameEn: data.firstnameEn,
            lastnameEn: data.lastnameEn,
            nickname: data.nickname,
            email: data.email,
            phone: data.phone,
            role: data.role,
            student: data.student ? this.mapStudentModelToStudentDto(data.student) : undefined,
            createdBy: data.createdBy,
            updatedBy: data.updatedBy,
            createdDate: data.createdDate,
            updatedDate: data.updatedDate,
        }
    }

    mapStudentModelToStudentDto(data: StudentModel): StudentDto {
        return {
            id: data.id,
            userId: data.userId,
            studentCode: data.studentCode,
            linkedin: data.linkedin,
            facebook: data.facebook,
            instagram: data.instagram,
            github: data.github,
            yearOfFirstAdmission: data.yearOfFirstAdmission,
            yearOfCompletion: data.yearOfCompletion,
            classOf: data.classOf,
            createdBy: data.createdBy,
            updatedBy: data.updatedBy,
            createdDate: data.createdDate,
            updatedDate: data.updatedDate,
        }
    }
}
