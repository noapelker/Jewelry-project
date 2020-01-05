import React from 'react';
import {DesignTxt} from "../../TextBlocks/TextBlocksEN";

const DesignLevelSix = props => {
    return (
        <div className={'levelTwoContainer'}>
              <span className={'textDesign'}>
                    {DesignTxt.titles.Step2}
                </span>
            <input type={'text'} placeholder={' Choose your '+  props.name +' name...'} className={'nameDesign'}/>

            <br/>
        </div>
    );
};

export default DesignLevelSix;
