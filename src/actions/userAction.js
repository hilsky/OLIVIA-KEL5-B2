import axios from "axios";

export const GET_USER = "GET_USER";


export const getUser = () => {
    return (dispatch) => {
        axios
            .get("https://api-sabatour.cyclic.app/api/auth/getUser")
            .then((response) => {
                dispatch({
                    type: GET_USER,
                    payload: {
                        loading: true,
                        data: response.data,
                        errorMessage: false
                    },
                });
            })
            .catch((error) => {
                dispatch({
                    type: GET_USER,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: true
                    },
                });
            })
    }
}
