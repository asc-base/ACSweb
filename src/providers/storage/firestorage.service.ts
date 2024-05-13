import { Bucket, Storage } from '@google-cloud/storage'
import { Injectable } from '@nestjs/common'
import { File } from 'src/models'
import { format } from 'util'

@Injectable()
export class FireStorageService {
    private readonly storage: Storage
    private readonly bucket: Bucket
    private readonly baseUrl: string

    constructor() {
        this.storage = new Storage({
            projectId: process.env.FIRE_BASE_PROJECT_ID,
            keyFilename: process.env.FIRE_BASE_FILE_NAME_CREDENTIAL,
        })

        this.bucket = this.storage.bucket(process.env.FIRE_BASE_BUCKET!)
        this.baseUrl = `https://firebasestorage.googleapis.com/v0/b/${this.bucket.name}/o/`
    }

    async upload(path: string, file: File): Promise<string> {
        const filename = `${path}/${file.originalname}`

        await this.bucket.file(filename).save(file.buffer)

        return format(`${this.baseUrl}${filename.replace('/', '%2F')}?alt=media`)
    }
}
