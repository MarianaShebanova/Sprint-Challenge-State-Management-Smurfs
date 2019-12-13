import React from 'react';
import { connect } from 'react-redux';
import Smurf from './Smurf';


const Smurfs = props => {
    return (
        <div>
            {props.smurfs.map((smurf, index) => (
                <div key={smurf.id}>
                    <Smurf smurf={smurf} index={index} />
                </div>
            ))}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    {}
)(Smurfs);