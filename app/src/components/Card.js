import React from 'react';
import { connect } from 'react-redux';
import { getMagic } from "../actions";
import Loader from 'react-loader-spinner'
import { Button } from './Styles';

const Card = props => {
    const handleCard = event => {
        event.preventDefault();
        props.getMagic();
    }
    return (
        <div>
            {props.isFetching && (
                <Loader type='Puff' color='red' height={200} width={200} />
            )}
                <Button onClick={handleCard}>Deal</Button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        data: state.data,
        isFetching: state.isFetching
    }
}

export default connect(mapStateToProps, { getMagic })(Card)