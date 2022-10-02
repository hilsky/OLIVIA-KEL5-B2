import { 
    GET_GUIDES_LIST,
    GET_GUIDES_DETAIL 
} from "../actions/guideAction";

let initialState = {
    getGuidesListResult: false,
    getGuidesLoading: false,
    getGuidesError: false,
    getGuideDetailResult: false,
    getGuideDetailError: false,
    getGuideDetailLoading: false
}

const guide = (state = initialState, action) => {
    switch(action.type) {
        case GET_GUIDES_LIST:
            return {
                ...state,
                getGuidesListResult: action.payload.data,
                getGuidesLoading: action.payload.loading,
                getGuidesError: action.payload.errorMessage
            }
        case GET_GUIDES_DETAIL:
            return {
                ...state,
                getGuideDetailResult: action.payload.data,
                getGuideDetailError: action.payload.error,
                getGuideDetailLoading: action.payload.loading
            }
        default:
            return state;
    }
}

export default guide;