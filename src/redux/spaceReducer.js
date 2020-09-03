import {
  FETCH_CAPSULES_SUCCESS,
  FETCH_CAPSULES_FAILURE,
  FETCH_LANDING_PAD_SUCCESS,
  FETCH_LANDING_PAD_FAILURE,
} from "./actionTypesConstant";

const initialState = {
  loading: false,
  data: [],
  error: "",
  history: [],
};

const reducer = (state = initialState, action) => { 
  const newState = { ...state };
  console.log('newState', newState)
  console.log('state',state)
  switch (action.type) {
    case FETCH_CAPSULES_SUCCESS:
      return {
        ...state,
        error: "",
        data: action.payload,
        history: state.history.concat({ data: action.payload })
      };
    case FETCH_CAPSULES_FAILURE:
      return {
        ...state,
        data: [],
        error: action.payload,
        history: state.history.concat({error: action.payload})
      };
    case FETCH_LANDING_PAD_SUCCESS:
      return {
        ...state,
        error: "",
        data: action.payload,
        history: state.history.concat({ data: action.payload })
      };
    case FETCH_LANDING_PAD_FAILURE:
      return {
        ...state,
        data: [],
        error: action.payload,
        history: state.history.concat({ error: action.payload})
      };
    default:
      return newState;
  }
};

export default reducer;
