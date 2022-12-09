import axios from "axios";

export const GET_WISATA_LIST = "GET_WISATA_LIST";
export const GET_WISATA_DETAIL = "GET_WISATA_DETAIL";

export const getWisataList = () => {
    return (dispatch) => {
        axios
            .get("https://api-sabatour.cyclic.app/wisata")
            .then((response) => {
                dispatch({
                    type: GET_WISATA_LIST,
                    payload: {
                        loading: true,
                        data: response.data,
                        errorMessage: false
                    },
                });
            })
            .catch((error) => {
                dispatch({
                    type: GET_WISATA_LIST,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: true
                    },
                });
            })
    }
}

export const getWisataDetail = (id) => {
    return (dispatch) => {
        axios
            .get("https://api-sabatour.cyclic.app/wisata/" + id)
            .then((response) => {
                dispatch({
                    type: GET_WISATA_DETAIL,
                    payload: {
                        loading: true,
                        data: response.data,
                        errorMessage: false
                    },
                });
            })
            .catch((error) => {
                dispatch({
                    type: GET_WISATA_DETAIL,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: true
                    },
                });
            })
    }
}