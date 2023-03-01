import { apiPostMethod, apiPatchMethod, apiGetMethod } from '../../api';
import APIURLS from '../../api/ApiUrls';
import {
    USER_DETAILS,
    SIGN_IN,
    GET_SETTING_TYPE,
    AUTH_RESET_INITIAL_STATE
} from '../actiontypes';
import { error_handling_action } from './CommonAction';

export const auth_reset_initial_state_reduser = () => dispatch => {
    dispatch({ type: AUTH_RESET_INITIAL_STATE });
}

export const saveUserDetails_Action = (data) => (dispatch) => {
    dispatch({ type: USER_DETAILS, userDetails: data });
};

export const Signin_Action = (status = false, data) => dispatch => {
    if (status) {
        dispatch({ type: SIGN_IN, signindata: [] });
    } else {
        let endpoint = `${APIURLS.SIGNIN}`
        var parameter = { email: data.email, password: data.password }
        apiPostMethod({ endpoint: endpoint, params: parameter })
            .then((response) => {
                dispatch({ type: SIGN_IN, signindata: { status: response.status, message: response?.message } });
                if(response.status == "success"){
                    dispatch(saveUserDetails_Action(response.data));
                }
            })
            .catch((error) => {
                dispatch(error_handling_action());
                dispatch({ type: SIGN_IN, signindata: [] });
            })
    }
};

