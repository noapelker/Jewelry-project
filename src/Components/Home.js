import React, {useState} from 'react';
import '../CssFolder/Home.css'
// import ring from './ringVideo.mp4';

import {HomeTxt} from "../TextBlocks/TextBlocksEN";
import ImageHolder from '../Components/ImageHolder'
import Footers from "./Footers";
import {Link} from "react-router-dom";

const Home = () => {
    const [type, SetType] = useState('none');
    const changeType = (value) => () => {
        SetType(value);
    };

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
                                                                      changeType={changeType}
                                                                      path={item.path}

                    />)}

                </div>
                <Footers/>
            </div>
    );
};

export default Home;
