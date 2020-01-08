import React from 'react';
import Presentation from './Explore video.mp4';
import '../CssFolder/Explore.css'
import {ExploreTxt} from "../TextBlocks/TextBlocksEN";
import img from './DreamExplore.png';
import ReactPlayer from "react-player";

const Explore = props => {

    return (
        <div className={'exploreContainer'}>
            <div className={'videoContainer'}>
                <ReactPlayer url={Presentation} width={'100vw'} playbackRate={5.0} height={'unset'} className={'videoClass'} playing={true} loop={true}
                       muted={true} playbackrate="2" >

                </ReactPlayer>
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
