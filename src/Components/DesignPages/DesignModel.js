import React from 'react';
import {DesignTxt} from "../../TextBlocks/TextBlocksEN";

const DesignModel = props => {

    return (
        <div>

                <div className={'modelParent'}>
                    <span>Your design</span>
                        <img alt={''} src={props.image} className={'modelContainer'}/>
                </div>
            </div>
    );
};

export default DesignModel;