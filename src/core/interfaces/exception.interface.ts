import {
    BadRequestException,
    ForbiddenException,
    HttpException,
    InternalServerErrorException,
    NotFoundException,
    UnauthorizedException,
} from '@nestjs/common'

class Exception {
    public static createBadRequestException(message?: string | object): HttpException {
        return new BadRequestException(message)
    }

    public static createUnAuthorizedException(message?: string | object): HttpException {
        return new UnauthorizedException(message)
    }

    public static createForbiddenException(message?: string | object): HttpException {
        return new ForbiddenException(message)
    }

    public static createNotFoundException(message?: string | object): HttpException {
        return new NotFoundException(message)
    }

    public static createInternalServerException(message?: string | object): HttpException {
        return new InternalServerErrorException(message)
    }
}

export default Exception
