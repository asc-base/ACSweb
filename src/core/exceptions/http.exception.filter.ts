/* eslint-disable @typescript-eslint/no-explicit-any */
import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common'
import { Response } from 'express'

const { INTERNAL_SERVER_ERROR, BAD_REQUEST, UNAUTHORIZED, FORBIDDEN, NOT_FOUND } = HttpStatus

const INTERNAL_SERVER_ERROR_MSG = 'Internal server error'

// TODO: fix return message and error response
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost): void {
        const ctx = host.switchToHttp()
        const response = ctx.getResponse<Response>()
        const status =
            exception instanceof HttpException ? exception.getStatus() : INTERNAL_SERVER_ERROR

        console.log(`status: ${status}`)
        console.log(`exception: `, exception)

        let message = ''
        switch (status) {
            case BAD_REQUEST:
                message = `Bad Request`
                break
            case UNAUTHORIZED:
                message = `Unauthorized`
                break
            case FORBIDDEN:
                message = `Forbidden`
                break
            case NOT_FOUND:
                message = `Not Found`
                break
            default:
                message = INTERNAL_SERVER_ERROR_MSG
                break
        }

        response.status(status).json({
            code: status,
            message,
            errors: exception.getResponse() || INTERNAL_SERVER_ERROR_MSG,
        })
    }
}
