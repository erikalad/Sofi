import axios from 'axios';

export const postMetas = (data) => {
    return function (dispatch) {
        dispatch({
            type: "POST_METAS",
            payload: data,
        })
    }
}

export const postAgradecimientos = (data) => {
    return function (dispatch) {
        dispatch({
            type: "POST_AGRADECIMIENTOS",
            payload: data,
        })
    }

}