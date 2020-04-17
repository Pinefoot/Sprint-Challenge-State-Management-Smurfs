import axios from 'axios';

export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAIL = 'FETCH_SMURF_FAIL';
export const POST_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const POST_SMURF_FAIL = 'FETCH_SMURF_FAIL';

export const getSmurfs = () => dispatch => {
    dispatch({type: FETCH_SMURF_START})
    axios.get('http://localhost:3333/smurfs')
    .then(response =>{
        console.log('api data:', response);
        dispatch({ type: FETCH_SMURF_SUCCESS, payload: response.data})
    })
    .catch(err =>{
        console.log('axios get error:',err)
        dispatch({type:FETCH_SMURF_FAIL, payload: err.res});
    })
}

export const postSmurfs = newSmurf => dispatch =>{
    axios.post('http://localhost:3333/smurfs', newSmurf)
    .then(response =>{
        dispatch({type: POST_SMURF_SUCCESS, payload: response.data})
    }).catch(err=>{
        dispatch({type: POST_SMURF_FAIL, payload: err.response});
    })

}