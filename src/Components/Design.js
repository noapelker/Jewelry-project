import React from 'react';
import '../CssFolder/Design.css'
import ImageHolder from '../Components/ImageHolder'
import {DesignTxt} from "../TextBlocks/TextBlocksEN";
const func=(e)=>{
    alert(e.currentTarget.id)
}
const Design = props => {
    return (
        <div>
            <div className={'designContainer'}>
            </div>
            <div className={'designPageContainer'}>
                <span className={'titleDesign'}>
                    {DesignTxt.titles[0]}
                </span>
                <br/>
                <span className={'textDesign'}>
                    {DesignTxt.titles[1]}
                </span>
                <div className={'imagesContainer'}>
                    {DesignTxt.images.map((item, index) => <ImageHolder key={index}
                                                                         source={item.url}
                                                                         text={item.name}
                                                                         imageClass={'imgDesign'}
                                                                         parentClass={'imgDesignContainer'}
                                                                         textClass={'imgTextDesign'} onClick={func}/>)}
                </div>
            </div>
        </div>
    );
};

export default Design;