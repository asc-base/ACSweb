import { Injectable } from '@nestjs/common'
import { StudentEntity } from 'src/entities/student.entity'
import { UserEntity } from 'src/entities/user.entity'
import { StudentModel } from 'src/models/student'
import { UsersModel } from 'src/models/users'

@Injectable()
export class UsersFactory {
    constructor() {}

    mapUsersEntitiesToUsersModels(list: UserEntity[]): UsersModel[] {
        return list.map(this.mapUsersEntityToUsersModel)
    }

    mapUsersEntityToUsersModel(data: UserEntity): UsersModel {
        return {
            id: data.id,
            username: data.username,
            profileUrl: data.profileUrl || '',
            firstnameTh: data.firstnameTh || '',
            lastnameTh: data.lastnameTh || '',
            firstnameEn: data.firstnameEn || '',
            lastnameEn: data.lastnameEn || '',
            nickname: data.nickname || '',
            roleId: data.roleId,
            email: data.email,
            phone: data.phone,
            password: data.password,
            role: data.Role?.name || '',
            student: data.student ? this.mapStudentEntityToStudentModel(data.student) : undefined,
        }
    }

    mapStudentEntityToStudentModel(data: StudentEntity): StudentModel {
        return {
            id: data.id,
            userId: data.userId,
            studentCode: data.studentCode,
            linkedin: data.linkedin || '',
            facebook: data.facebook || '',
            instagram: data.instagram || '',
            github: data.github || '',
            yearOfFirstAdmission: data.yearOfFirstAdmission,
            yearOfCompletion: data.yearOfCompletion || undefined,
            classOf: data.classOf,
        }
    }
}
