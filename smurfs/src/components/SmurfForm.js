import React, {useState} from 'react';
import {connect} from 'react-redux';
import {postSmurfs} from '../actions';



const SmurfForm = props => {
    const [newSmurf, setNewSmurf] = useState ({
        name: '',
        age: '',
        height: '',
        id: Date.now()
    })

    const changeHandler = e => {
        setNewSmurf({...newSmurf, [e.target.name]: e.target.value});

    }
    const submitForm = e =>{
        e.preventDefault();
        
        
    }

    return(
        <div>
            <h2>So you've caught a smurf! Good work Gargamel! Input the Data!</h2>
            <form onSubmit={submitForm}>
            <label>
                Name:
             <input
                name = 'name'
                id = ''
                type='text'
                onChange = {changeHandler}
                value={newSmurf.name}>
             </input>
            </label><br/>
            <label>
                Age:
             <input
                name = 'age'
                id = ''
                type='text'
                onChange = {changeHandler}
                value={newSmurf.age}>
             </input>
            </label><br/>
            <label>
                Height:
             <input
                name = 'height'
                id = ''
                type='text'
                onChange = {changeHandler}
                value={newSmurf.height}>
             </input>
            </label><br/>

            </form>
            <button type='submit' onClick={()=>props.postSmurfs(newSmurf)} >Add to collection.</button>
            
        </div>
    )
}
const mapStateToProps = state => {
    return{
        addingSmurfs: state.addingSmurfs
    }
}

export default connect(mapStateToProps,{postSmurfs}) (SmurfForm);