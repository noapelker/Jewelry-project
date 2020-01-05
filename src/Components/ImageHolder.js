import React from 'react';
import {NavLink} from 'react-router-dom';

const ImageHolder = props => {
    return (

        <NavLink to={"/"+props.path}>
            <div className={props.parentClass} id={props.text}>
                <span className={props.textClass}>{props.text}</span>
                <img alt={''} src={'../../Photos/' + props.source} className={props.imageClass}
                     onClick={props.changeType(props.text.toLowerCase())}/>
            </div>
        </NavLink>
    );
};

export default ImageHolder;
