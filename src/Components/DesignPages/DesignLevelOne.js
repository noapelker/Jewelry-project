import React from 'react';
import {DesignTxt} from "../../TextBlocks/TextBlocksEN";
import ImageHolder from '../../Components/ImageHolder'

const DesignLevelOne = props => {
    return (
        <div className={'levelOneContainer'}>

            <div className={'imagesContainer'}>
                {DesignTxt.images.map((item, index) => <ImageHolder key={index}
                                                                    source={item.url}
                                                                    text={item.name}
                                                                    imageClass={'imgDesign'}
                                                                    parentClass={'imgDesignContainer'}
                                                                    textClass={'imgTextDesign'}
                                                                    onClick={props.nextPage}/>)}
            </div>
        </div>
    );
};

export default DesignLevelOne;
