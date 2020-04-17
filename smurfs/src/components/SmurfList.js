import React from 'react';
import {connect} from 'react-redux';
import {getSmurfs} from "../actions";



const SmurfList = props => {
    return (
        <div>
            <h2>Here there be dragons....err...smurfs.</h2>
            <button onClick={()=>props.getSmurfs()}>This is the Gilgamesh Button to Display Captured Smurfs</button>
            
            {props.smurfs && props.smurfs.map(smurfy =>(
                
                <div key={smurfy.id}>
                    <h3>Smurf: {smurfy.name}</h3>
                    <h4>Age: {smurfy.age}</h4>
                    <h4>Height: {smurfy.height}</h4>
                </div>
            ))}
            
        </div>
    )
}

const mapStateToProps = state => {
    //console.log('mapstate',state);
    return {
        smurfs: state.name,
        fechingSmurfs: state.fetchingSmurfs,
        error: state.error
    }
}


export default connect(mapStateToProps, {getSmurfs})(SmurfList);