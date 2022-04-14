export const addToStore = (data) => {
    return {
        type: 'ADD',
        payload: data
    }
}

export const removeFromStore = () => {
    return {
        type: 'REMOVE'
    }
}

export const updateStore = (data) => {
    return {
        type: 'UPDATE',
        payload: data
    }
}