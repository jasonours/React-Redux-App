import React from 'react';
import { connect } from 'react-redux';
import { getPoke } from "../actions";
import Loader from 'react-loader-spinner'

const Card = props => {
    const handlePoke = event => {
        event.preventDefault();
        props.getPoke();
    }
    return (
        <div>
            {props.isFetching && (
                <Loader type='Puff' color='red' height={100} width={100} />
            )}
                <div> Catching Pokemon...</div>
                <button onClick={handlePoke}>Catch</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        data: state.data,
        isFetching: state.isFetching
    }
}

export default connect(mapStateToProps, { getPoke })(Card)