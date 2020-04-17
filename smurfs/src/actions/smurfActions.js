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
        console.log('api data:', response.data);
        dispatch({ type: FETCH_SMURF_SUCCESS, payload: response.data.results})//might need another level deeper, once I have it set up I'll be able to see what data looks like.
    })
    .catch(err =>{
        dispatch({type:FETCH_SMURF_FAIL, payload: err.res});
    })
}

export const postSmurfs = newSmurf => dispatch =>{
    axios.post('http://localhost:3333/smurfs', newSmurf)
    .then(response =>{
        dispatch({type: POST_SMURF_SUCCESS, payload: response.data.results})
    }).catch(err=>{
        dispatch({type: POST_SMURF_FAIL, payload: err.response});
    })

}