import React from 'react';
import {NavLink} from "react-router-dom";

const DesignLine = props => {
    return (
        <NavLink to={"/createLine"}>
            <div>
Line
            </div>
        </NavLink>
    );
};

export default DesignLine;
