import { QueryUserDto } from './dto/get-users.dto'

export enum ORDER_FIELD {
    USERNAME = 'username',
    FIRSTNAME_TH = 'firstnameTh',
    LASTNAME_TH = 'lastnameTh',
    FIRSTNAME_EN = 'firstnameEn',
    LASTNAME_EN = 'lastnameEn',
    EMAIL = 'email',
    PHONE = 'phone',
    ROLE = 'role',
    CREATED_DATE = 'createdDate',
    UPDATED_DATE = 'updatedDate',
}

export const ExceptFields: (keyof QueryUserDto)[] = ['phone']
