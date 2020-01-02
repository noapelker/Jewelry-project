import React from 'react';

const ImageHolder = props => {

    return (
        <div className={props.parentClass} id={props.text} onClick={props.onClick(props.text)}>
            <span className={props.textClass}>{props.text}</span>
            <img alt={''} src={'../../Photos/'+props.source} className={props.imageClass}/>
        </div>
    );
};

export default ImageHolder;
