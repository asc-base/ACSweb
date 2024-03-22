const calculatePagination = (page: number, pageSize: number): number => {
    return (page - 1) * pageSize
}

export default calculatePagination
