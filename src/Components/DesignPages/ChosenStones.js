import React from 'react';
import Gallery from 'react-grid-gallery';

const chosenStones = props => {
    return (
        <div>
            <Gallery images={props.options} rowHeight={100} onSelectImage={props.onSelectImage}
                     showLightboxThumbnails={true}/>
        </div>
    );
};

export default chosenStones;