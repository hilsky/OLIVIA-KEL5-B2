import axios from "axios";

export const GET_GUIDES_LIST = "GET_GUIDES_LIST";
export const GET_GUIDES_DETAIL = "GET_GUIDES_DETAIL";

export const getGuidesList = () => {
    return (dispatch) => {
        axios
            .get("https://api-sabatour.cyclic.app/guide")
            .then((response) => {
                dispatch({
                    type: GET_GUIDES_LIST,
                    payload: {
                        loading: true,
                        data: response.data,
                        errorMessage: false
                    },
                });
            })
            .catch((error) => {
                dispatch({
                    type: GET_GUIDES_LIST,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: true
                    },
                });
            })
    }
}

export const getGuideDetail = (id) => {
    return (dispatch) => {
        axios
            .get("https://api-sabatour.cyclic.app/guide/" + id)
            .then((response) => {
                dispatch({
                    type: GET_GUIDES_DETAIL,
                    payload: {
                        loading: true,
                        data: response.data,
                        errorMessage: false
                    },
                });
            })
            .catch((error) => {
                dispatch({
                    type: GET_GUIDES_DETAIL,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: true
                    },
                });
            })
    }
}