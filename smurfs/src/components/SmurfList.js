import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getSmurfs} from "../actions";
import Loader from 'react-loader-spinner'



const SmurfList = props => {
    useEffect(()=>{
        props.getSmurfs();
    },[])
    
    return (
        <div>
            <h2>Smurf List.</h2>
            {/* {prop.fetchingSmurfs && (<Loader timeout={3000}/>)} */}
            {/* <button onClick={()=>props.getSmurfs()}>Captured Smurfs</button> */}
            
            {props.smurf && props.smurf.map(smurfy =>(
              
                <div key={smurfy.id}>
                    
                    <p>Name: {smurfy.name}</p>
                    
                    <p>Age: {smurfy.age}</p>
                    <p>Height: {smurfy.height}</p>
                </div>
                
            ))}
            
        </div>
    )
}

const mapStateToProps = state => {
    console.log('mapstate', state);
    return {
        smurf: state.smurf,
        fetchingSmurfs: state.fetchingSmurfs,
        error: state.error
       
    }
}


export default connect(mapStateToProps, {getSmurfs})(SmurfList);