import {
  FETCH_CAPSULES_REQUEST,
  FETCH_CAPSULES_SUCCESS,
  FETCH_CAPSULES_FAILURE,
  FETCH_LANDING_PAD_SUCCESS,
  FETCH_LANDING_PAD_FAILURE
} from "./actionTypesConstant";

const initialState = {
  loading: false,
  data: [],
  error: ""
};

const reducer = (state = initialState, action) => {
  console.log('inside reducer',action.type)
  console.log('payload',action.payload)
  switch (action.type) {
    case FETCH_CAPSULES_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_CAPSULES_SUCCESS:
      return {
        loading: false,
        error: "",
        data: action.payload
      };
    case FETCH_CAPSULES_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload
      };
      case FETCH_LANDING_PAD_SUCCESS:
        return {
          loading: false,
          error: "",
          data: action.payload
        };
      case FETCH_LANDING_PAD_FAILURE:
        return {
          loading: false,
          data: [],
          error: action.payload
        };
    default:
      return state;
  }
};

export default reducer;
