import React from 'react';
import ImageHolder from "./ImageHolder";
import '../CssFolder/Create.css'

const Create = props => {
    return (
        <div className={'imagesCreateMainContainer'}>
                <ImageHolder source={'modelHome3.jpg'}
                             text={'Create a line'}
                             imageClass={'imageCreate'}
                             parentClass={'imageCreateContainer'}
                             textClass={'imgCreateText'}
                             changeType={() => {
                             }}
                             path={'design'}/>

                <ImageHolder source={'modelHome1.jpeg'}
                             text={'Create your own jewelry '}
                             imageClass={'imageCreate'}
                             parentClass={'imageCreateContainer'}
                             textClass={'imgCreateText'}
                             changeType={() => {
                             }}
                             path={'design'}/>
            </div>
    );
};

export default Create;
