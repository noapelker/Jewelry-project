import React from 'react';
import Gallery from 'react-grid-gallery';
import {DesignTxt} from "../../TextBlocks/TextBlocksEN";

const chosenStones = props => {
    return (
        <div>
            <Gallery images={props.options} rowHeight={100} onSelectImage={()=>{}}
                     showLightboxThumbnails={true} backdropClosesModal={true}/>
        </div>
    );
};

export default chosenStones;