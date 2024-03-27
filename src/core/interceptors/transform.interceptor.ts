/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    CallHandler,
    ExecutionContext,
    HttpStatus,
    Injectable,
    NestInterceptor,
} from '@nestjs/common'
import { Request } from 'express'
import { Observable, map } from 'rxjs'

@Injectable()
export class TransformInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const request = context.switchToHttp().getRequest<Request>()
        const status = request.method === 'POST' ? HttpStatus.CREATED : HttpStatus.OK

        return next.handle().pipe(map((data) => ({ code: status, message: 'success', data })))
    }
}
