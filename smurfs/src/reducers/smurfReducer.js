import {
    FETCH_SMURF_START,
    FETCH_SMURF_SUCCESS,
    FETCH_SMURF_FAIL,
    POST_SMURF_SUCCESS,
    POST_SMURF_FAIL
    
  } from "../actions/smurfActions";

  const initialState = {
    
        
          name: [],
          fetchingSmurfs: false,
          addingSmurfs: false,
          error:''
        
      
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
                name: action.payload,
                fetchingSmurfs: false,
                error: ''
            };
         case FETCH_SMURF_FAIL:
            return{
                ...state,
                fetchingSmurfs: false,
                error: action.payload
            };
            case POST_SMURF_SUCCESS:
                const newSmurf = {
                    name: action.payload,
                    age: '',
                    height: '',
                    id: Date.now()
                }
                return {...state, name:[...state.name, newSmurf]};
            case POST_SMURF_FAIL:
                return {
                    ...state,
                    addingSmurf: false,
                    error: action.payload,
                    fetchingSmurfs: false,
                }


            default:
                return state;
      }
  };

  export default smurfReducer;