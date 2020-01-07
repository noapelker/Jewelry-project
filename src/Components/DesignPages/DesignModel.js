import React from 'react';

const DesignModel = props => {

    return (

        <div className={'modelParent'}>
            <span>Your design</span>
            <img alt={''} src={props.image} className={'modelContainer'}/>
        </div>
    );
};

export default DesignModel;