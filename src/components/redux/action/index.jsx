

export const filter = (x) => {
    
    return {
        type: 'FILTER',
        payload: x
    }
}
export const search = (x) => {
    return {
        type: 'SEARCH',
        payload: x
    }
}

