import React from 'react';
import {HomeTxt} from "../TextBlocks/TextBlocksEN";
import ImageHolder from "./Home";
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
