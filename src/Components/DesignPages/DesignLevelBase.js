import React from 'react';
import {DesignTxt} from "../../TextBlocks/TextBlocksEN";
import Gallery from 'react-grid-gallery';

const DesignLevelBase = props => {


    const captionStyle = {
        wordWrap: "break-word",
        display: "inline-block",
        height: "auto",
        fontSize: "75%",
        fontWeight: "600",
        lineHeight: "1",
        padding: ".2em .6em .3em",
        borderRadius: ".25em",
        color: "white",
        verticalAlign: "baseline",
        margin: "2px"
    };


    return (

        <div className={'levelBaseContainer'}>
             <span className={'textBase'}>
                    {DesignTxt.titles.baseStep}
                </span>
            <div className={'gridContainer'}>

                <Gallery images={DesignTxt.earring}
                         enableImageSelection={false}   tagStyle={captionStyle}

                />
            </div>
        </div>
    );
};

export default DesignLevelBase;
