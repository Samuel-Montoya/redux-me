const initialState = { likes: 0 }

const counterReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'UPVOTE':
            return { likes: state.likes += 1 }
        case 'DOWNVOTE':
            return { likes: state.likes -= 1 }
        default: return state
    }
}

export default counterReducer