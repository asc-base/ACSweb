import { ArgumentsHost, Catch, HttpStatus } from '@nestjs/common'
import { BaseExceptionFilter } from '@nestjs/core'
import { Prisma } from '@prisma/client'
import { Response } from 'express'

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaExceptionFilter extends BaseExceptionFilter {
    catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost): void {
        const ctx = host.switchToHttp()
        const response = ctx.getResponse<Response>()
        const errors = exception.message.replace(/\n/g, '')

        let status = 500
        let message = ''
        switch (exception.code) {
            case 'P2025': {
                status = HttpStatus.NOT_FOUND
                message = 'Not Found'
                break
            }
        }

        response.status(status).json({
            code: status,
            message,
            errors,
        })
    }
}
