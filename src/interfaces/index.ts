export interface Pageable<T> {
    rows: T[]
    totalRecords: number
    page: number
    pageSize: number
}
