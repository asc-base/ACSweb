import { Module } from '@nestjs/common'
import { FireStorageService } from 'src/providers/storage/firestorage.service'

@Module({
    providers: [FireStorageService],
    exports: [FireStorageService],
})
export class FireStorageModule {}
