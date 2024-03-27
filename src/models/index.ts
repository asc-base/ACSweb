export interface Pageable<T> {
    rows: T[]
    totalRecords: number
    page: number
    pageSize: number
}

export interface BaseModel {
    createdDate?: Date
    createdBy?: number
    updatedDate?: Date
    updatedBy?: number | null
}
