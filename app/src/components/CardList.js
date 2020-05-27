import React from 'react';
import { connect } from 'react-redux';
import { getMagic } from '../actions';

const CardList = (props) => {
    return (
        <>
            {props.error ? (
            <div>{props.error}</div>
            ) : (
            props.data.map(magic => 
                <div className="card" key={magic.id}>
                    <div>
                        <div>
                            <img src={magic.imageUrl} alt="Magic Card"></img>
                        </div>
                        <div>
                            <div >
                                <h3>{magic.name}</h3>
                                <p>Number: {magic.number}</p>
                                <p>Rarity: {magic.rarity}</p>
                                <p>Set: {magic.setName}</p>
                            </div>
                        </div>
                    </div>
                </div>)
            )}
        </>
    );
};
  
const mapStateToProps = state => {
    return {
        data: state.data,
        error: state.error
    };
};
 
export default connect(mapStateToProps, { getMagic })(CardList);