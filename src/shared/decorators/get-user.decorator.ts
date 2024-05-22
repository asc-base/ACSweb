import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { UsersModel } from 'src/models/users'

export const GetUser = createParamDecorator((data, ctx: ExecutionContext): UsersModel => {
    const request = ctx.switchToHttp().getRequest()
    return request.user
})
