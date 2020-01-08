import React from 'react';
import Presentation from './Explore video.mp4';
import '../CssFolder/Explore.css'
import {ExploreTxt} from "../TextBlocks/TextBlocksEN";
import img from './DreamExplore.png';

const Explore = props => {
    return (
        <div className={'exploreContainer'}>
            <div className={'videoContainer'}>
                <video className={'videoClass'} height={'20vh'} autoPlay={true} loop={true}
                       muted={true} >
                    <source src={Presentation} type='video/mp4'/>
                </video>
            </div>
            <div className={'textContainerExplore'}>
                <span className={'TitleExplore'}>
                    {ExploreTxt.titles.AboutUs}
                </span>
                <p className={'TextExplore'}>
                    {ExploreTxt.text.AboutUs}
                </p>
            </div>
            <img alt={''} src={img} className={'exploreImg'}/>
            <div className={'TextExploreSec'}>
                <span className={'TitleExplore'}>
                    {ExploreTxt.titles.OurVision}
                </span>
                <p className={'TextExplore'}>
                    {ExploreTxt.text.OurVision}
                </p>
            </div>
        </div>
    );
};

export default Explore;
