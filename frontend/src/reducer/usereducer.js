export let initilstate = null

export const reducer = (state, action) => {
    if (action.type === 'USER') {
        return action.payload
    }
    return state
}

initilstate = {
    loggedIn: localStorage.getItem('isLoggedin') || false,
}