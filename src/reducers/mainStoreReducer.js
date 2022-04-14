export const mainStore = (state = [], action) => {
    switch(action.type){
        case 'ADD':
            console.log(action.payload)
            return [...state, action.payload];
        case 'REMOVE':
            const filtered = state.filter( (element) => element.name !== action.payload)
            return [...filtered];
        case 'UPDATE':
            return [...action.payload]
    }
}