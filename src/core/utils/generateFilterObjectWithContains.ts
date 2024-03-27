const generateFilterObjectWithContains = (
    filter: Record<string, string | number>,
    exceptFields: string[],
): Record<string, string | { contains: string; mode: string }> => {
    return Object.keys(filter).reduce((acc, key) => {
        if (exceptFields.includes(key)) {
            return {
                ...acc,
                [key]: filter[key],
            }
        }

        return {
            ...acc,
            [key]: {
                contains: filter[key],
                mode: 'insensitive',
            },
        }
    }, {})
}

export default generateFilterObjectWithContains
