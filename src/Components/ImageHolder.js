import React from 'react';

const ImageHolder = props => {
    return (
        <div className={props.parentClass} id={"noa"} onClick={props.onClick}>
            <span className={props.textClass}>{props.text}</span>
            <img alt={''} src={'../../Photos/'+props.source} className={props.imageClass}/>
        </div>
    );
};

export default ImageHolder;