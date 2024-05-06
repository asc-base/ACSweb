import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import helmet from 'helmet'
import { HttpExceptionFilter } from 'src/core/exceptions/http.exception.filter'
import { PrismaExceptionFilter } from 'src/core/exceptions/prisma.exception.filter'
import ValidationException from 'src/core/exceptions/validate.exception'
import { TransformInterceptor } from 'src/core/interceptors/transform.interceptor'
import { AppModule } from './app.module'

async function bootstrap(): Promise<void> {
    const app = await NestFactory.create(AppModule, { cors: true })

    const port = process.env.APP_PORT || 9001

    // middleware
    app.use(helmet())

    // global prefix
    app.setGlobalPrefix('/api')

    // global interceptors
    // transform
    app.useGlobalInterceptors(new TransformInterceptor())

    // global filters
    app.useGlobalFilters(...[new HttpExceptionFilter(), new PrismaExceptionFilter()])

    // global pipes
    app.useGlobalPipes(
        new ValidationPipe({
            transform: true,
            exceptionFactory: ValidationException,
        }),
    )

    // swagger api
    const config = new DocumentBuilder()
        .setTitle('The ACS-Web API')
        .setDescription('The ACS-Web API description')
        .setVersion('1.0')
        .addBearerAuth(
            {
                description: `[just text field] Please enter token in following format: Bearer <JWT>`,
                name: 'Authorization',
                bearerFormat: 'Bearer',
                scheme: 'Bearer',
                type: 'http',
                in: 'Header',
            },
            'access-token',
        )
        .build()
    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('api/docs', app, document)

    await app.listen(port)
}
bootstrap()
