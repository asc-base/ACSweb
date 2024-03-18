import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { PrismaModule } from 'src/prisma/prisma.module'
import { ExampleModule } from './example/example.module'
import { HealthModule } from './health/health.module'
import { UserModule } from './user/user.module'

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env',
        }),
        HealthModule,
        ExampleModule,
        PrismaModule,
        UserModule,
    ],
})
export class AppModule {}
