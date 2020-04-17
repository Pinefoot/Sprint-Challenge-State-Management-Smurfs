import {
    FETCH_SMURF_START,
    FETCH_SMURF_SUCCESS,
    FETCH_SMURF_FAIL,
    POST_SMURF_SUCCESS,
    POST_SMURF_FAIL,
    getSmurfs,
    postSmurfs
  } from "../actions/smurfActions";

  const initialState = {
      smurfs: [],
      fetchingSmurfs: false,
      addingSmurfs: false,
      error: '',
  };

  const smurfReducer = (state = initialState, action)=>{
      switch(action.type){
          case FETCH_SMURF_START:
              return {
                  ...state,
                  fetchingSmurfs: true
              };
        case FETCH_SMURF_SUCCESS:
            console.log('FetcherSuccess:', action)
            return{
                ...state,
                smurfs: action.payload,
                fetchingSmurfs: false,
                error: ''
            };
         case FETCH_SMURF_FAIL:
            return{
                ...state,
                fetchingSmurfs: false,
                error: action.payload
            };


            default:
                return state;
      }
  };

  export default smurfReducer;