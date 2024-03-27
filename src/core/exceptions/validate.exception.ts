import { HttpException } from '@nestjs/common'
import { ValidationError } from 'class-validator'
import Exception from 'src/core/interfaces/exception.interface'

const ValidationException = (errors: ValidationError[]): HttpException => {
    const message = errors.reduce(
        (p, c) => {
            p[c?.property] = [...Object.values(c.constraints ?? {})]
            return p
        },
        {} as { [index: string]: string[] },
    )

    return Exception.createBadRequestException(message)
}

export default ValidationException
