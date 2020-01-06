import React from 'react';
import '../CssFolder/Home.css'

import {HomeTxt} from "../TextBlocks/TextBlocksEN";
import ImageHolder from '../Components/ImageHolder'
import Footers from "./Footers";

const Home = () => {

    return (

            <div>
                <div className={"AppContainer"}/>
                <div className={"textContainer"}>
                    <span className={"homeTitle"}>{HomeTxt.titles.MainTitle}</span>
                    <p className={"homeText"}>
                        {HomeTxt.text["Explore:"]}
                    </p>
                </div>
                <div className={'imgContainer'}>
                    {HomeTxt.images.map((item, index) => <ImageHolder key={index}
                                                                      source={item.url}
                                                                      text={item.name}
                                                                      imageClass={'imageHome'}
                                                                      parentClass={'imageHomeContainer'}
                                                                      textClass={'imgText'}
                                                                      changeType={()=>{}}
                                                                      path={item.path}

                    />)}

                </div>
                <Footers/>
            </div>
    );
};

export default Home;
