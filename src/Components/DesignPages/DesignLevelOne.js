import React from 'react';
import {DesignTxt} from "../../TextBlocks/TextBlocksEN";
import ImageHolder from '../../Components/ImageHolder'

const DesignLevelOne = props => {
    return (
        <div>
            <div className={'designContainer'}/>
            <div className={'designPageContainer'}>
                <span className={'titleDesign'}>
                    {DesignTxt.titles.MainTitle}
                </span>
                <div className={'levelOneContainer'}>
         <span className={'textDesign'}>
                    {DesignTxt.titles.Step1}
                </span>
                    <div className={'imagesContainer'}>
                        {DesignTxt.images.map((item, index) => <ImageHolder key={index}
                                                                            source={item.url}
                                                                            text={item.name}
                                                                            imageClass={'imgDesign'}
                                                                            parentClass={'imgDesignContainer'}
                                                                            textClass={'imgTextDesign'}
                                                                            changeType={props.changeType}
                                                                            path={item.path}
                        />)
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DesignLevelOne;
