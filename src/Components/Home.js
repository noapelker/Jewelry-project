import React from 'react';
import '../CssFolder/Home.css'
import ring from './ringVideo.mp4';

import {HomeTxt} from "../TextBlocks/TextBlocksEN";
import ImageHolder from '../Components/ImageHolder'

const Home = () => {
    return (
        <div>
            <div className={"AppContainer"}/>
            <video className={'videoClass'} autoPlay={true} loop={true} muted={true}>
                <source src={ring} type='video/mp4'/>
            </video>
            <div className={"textContainer"}>
                <span className={"homeTitle"}>{HomeTxt.titles[0]}</span>
                <p className={"homeText"}>
                    {HomeTxt.text[0]}
                </p>
            </div>
            <div className={'imgContainer'}>
                {HomeTxt.images.map((item, index) => <ImageHolder key={index}
                                                                  source={item.url}
                                                                  text={item.name}
                                                                  imageClass={'imageHome'}
                                                                  parentClass={'imageHomeContainer'}
                                                                  textClass={'imgText'}/>)}
            </div>
            <div className={"textContainerLast"}>
                <span className={"homeTitle"}>{HomeTxt.titles[3]}</span>
                <p className={"homeText"}>{HomeTxt.text[1]}
                </p>
                <div className={'discoverParent'}>
                    <div className={'discoverContainer'}>
                        <div className={'discoverCol'}>
                            <span className={"discoverTitle"}> {HomeTxt.titles[4]}</span>
                            {HomeTxt.channels.map((item, index) => <span key={index}
                                                                         className={"discoverText"}>{item}</span>)}
                            <br/>
                            <br/>
                            <span className={"discoverTitle"}>{HomeTxt.titles[5]}</span>
                            {HomeTxt.legal.map((item, index) => <span key={index}
                                                                      className={"discoverText"}>{item}</span>)}
                        </div>
                        <div className={'discoverCol'}>
                            <span className={"discoverTitle"}> {HomeTxt.titles[6]}</span>
                            {HomeTxt.collection.map((item, index) => <span key={index}
                                                                           className={"discoverText"}>{item}</span>)}
                            <br/>
                            <br/>
                            <span className={"discoverTitle"}> {HomeTxt.titles[7]}</span>
                            {HomeTxt.service.map((item, index) => <span key={index}
                                                                        className={"discoverText"}>{item}</span>)}
                        </div>
                        <div className={'discoverCol'}>
                            <span className={"discoverTitle"}>  {HomeTxt.titles[8]}</span>
                            {HomeTxt.languages.map((item, index) => <span key={index}
                                                                          className={"discoverText"}>{item}</span>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
