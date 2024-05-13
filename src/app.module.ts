import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MulterModule } from '@nestjs/platform-express'
import { MulterConfigService } from 'src/core/configs/multer-config.service'
import { PrismaModule } from 'src/providers/databases/prisma/prisma.module'
import { FireStorageModule } from 'src/providers/storage/firestorage.module'
import { AuthModule } from './modules/auth/auth.module'
import { ExampleModule } from './modules/example/example.module'
import { HealthModule } from './modules/health/health.module'
import { UsersModule } from './modules/users/users.module'

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env',
        }),
        HealthModule,
        ExampleModule,
        PrismaModule,
        UsersModule,
        AuthModule,
        FireStorageModule,
        MulterModule.registerAsync({
            useClass: MulterConfigService,
        }),
    ],
})
export class AppModule {}
