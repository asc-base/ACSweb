import { UserEntity } from '../entities/user.entity'
import { UsersMapper } from '../interfaces'

export const getUsersMapper = (users: UserEntity[], returnStudent: boolean): UsersMapper[] => {
    return users.map((user) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password, student, ...mapper } = user

        delete mapper.Role

        const mapperWithRole: UsersMapper = {
            ...mapper,
            role: user.Role!.name,
        }

        if (returnStudent && student) {
            mapperWithRole.student = student
        }

        return mapperWithRole
    })
}
