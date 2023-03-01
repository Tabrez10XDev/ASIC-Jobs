import {
  USER_DETAILS,
  SIGN_IN,
  AUTH_RESET_INITIAL_STATE,
  GET_SETTING_TYPE
} from '../actiontypes/AuthTypes';

const initialState = {
  userDetails: [],
  signindata: [],
  getsettingdata:[]
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_RESET_INITIAL_STATE:
      return {
          ...initialState,
      };
    case USER_DETAILS: {
      return {
        ...state,
        userDetails: action.userDetails,
      }
    }
    case SIGN_IN: {
      return {
        ...state,
        signindata: action.signindata
      };
    }
    case GET_SETTING_TYPE: {
      return {
          ...state,
          getsettingdata: action.getsettingdata,
      }
    }
    default: {
      return state;
    }
  }
}
