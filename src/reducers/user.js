import {
    GET_USER
} from "../actions/userAction";

let initialState = {
    getUserResult: false,
    getUserLoading: false,
    getUserError: false,
}

const User = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                getUserResult: action.payload.data,
                getUserLoading: action.payload.loading,
                getUserError: action.payload.errorMessage
            }
        default:
            return state;
    }
}

export default User;