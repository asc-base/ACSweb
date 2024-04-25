import { Prisma } from '@prisma/client'
import { GetUsersOptions, UsersModel } from 'src/models/users'

export abstract class IUsersRepository {
    abstract getList(options: GetUsersOptions): Promise<UsersModel[]>
    abstract geById(id: number, returnStudent: boolean): Promise<UsersModel>
    abstract count(filter: Prisma.UsersWhereInput): Promise<number>
    abstract getByEmail(email: string, returnStudent: boolean): Promise<UsersModel>
}
