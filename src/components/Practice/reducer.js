export const reducer = (state, action) => {
    if (action.type === 'Home'){
        return {
            ...state,
            name: action.playload.loact
        }

    }
}