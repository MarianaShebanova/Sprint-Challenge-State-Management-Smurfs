import React, {useState} from 'react';
import { connect } from 'react-redux';
import { postSmurfs, getSmurfs } from '../actions/smurfsAction';

const Form = props => {
    const [smurf, setSmurf] = useState({name: "", age: "", height: ""});

    const handleChangesName = e => {
        setSmurf({...smurf, name:e.target.value});
    };
    
    const handleChangesAge = e => {
        setSmurf({ ...smurf, age: e.target.value });
    };

    const handleChangesHeight = e => {
        setSmurf({ ...smurf, height: e.target.value });
    };

    return (
        <div>
            <input
                className="input"
                type="text"
                name="name"
                value={smurf.name}
                placeholder="Name"
                onChange={handleChangesName}
            />
            <input
                className="input"
                type="number"
                name="age"
                value={smurf.age}
                placeholder="Age"
                onChange={handleChangesAge}
            />
            <input
                className="input"
                type="number"
                name="height"
                value={smurf.height}
                placeholder="Height"
                onChange={handleChangesHeight}
            />
            <button className="submitButton" onClick={() => 
            {   setSmurf({ name: "", age: "", height: "" });
                props.postSmurfs(smurf);
            }}>
                Submit
            </button>
            <button onClick={props.getSmurfs}>Get Smurfs</button>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    { getSmurfs, postSmurfs }
)(Form);
