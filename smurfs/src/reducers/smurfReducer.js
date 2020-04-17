import {
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAIL,
  POST_SMURF_SUCCESS,
  POST_SMURF_FAIL
} from "../actions/smurfActions";

const initialState = {
  smurf: [],
  fetchingSmurfs: false,
  addingSmurfs: false,
  error: ""
};

const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURF_START:
      return {
        ...state,
        fetchingSmurfs: true,
        error: action.payload
      };
    case FETCH_SMURF_SUCCESS:
      console.log("FetcherSuccess:", action);
      return {
        ...state,
        smurf: action.payload,
        fetchingSmurfs: false,
        error: action.payload
      };
    case FETCH_SMURF_FAIL:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      };
    case POST_SMURF_SUCCESS:
      const newSmurf = {
        name: action.payload,
        age: "",
        height: "",
        id: Date.now()
      };
      return { ...state, smurf: [...state.smurf, newSmurf] };
    case POST_SMURF_FAIL:
      return {
        ...state,
        addingSmurf: false,
        error: action.payload,
        fetchingSmurfs: false
      };

    default:
      return state;
  }
};

export default smurfReducer;
