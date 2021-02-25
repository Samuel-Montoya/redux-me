const initialState = { isLoggedIn: false, username: '' }

const loggedReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SIGN_IN':
            return { ...state, isLoggedIn: true }
        case 'LOG_OUT':
            return { ...state, isLoggedIn: false }
        default: return state
    }
}

export default  loggedReducer