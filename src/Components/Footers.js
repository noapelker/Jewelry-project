import React from 'react';
import {HomeTxt} from "../TextBlocks/TextBlocksEN";

const Footers = props => {
    return (
        <div className={"textContainerLast"}>
            <span className={"homeTitle"}>{HomeTxt.titles.Explore}</span>
            <p className={"homeText"}>{HomeTxt.text.Discover}
            </p>
            <div className={'discoverParent'}>
                <div className={'discoverContainer'}>
                    <div className={'discoverCol'}>
                        <span className={"discoverTitle"}> {HomeTxt.titles.Channels}</span>
                        {HomeTxt.channels.map((item, index) => <span key={index}
                                                                     className={"discoverText"}>{item}</span>)}
                        <br/>
                        <br/>
                        <span className={"discoverTitle"}>{HomeTxt.titles.Legal}</span>
                        {HomeTxt.legal.map((item, index) => <span key={index}
                                                                  className={"discoverText"}>{item}</span>)}
                    </div>
                    <div className={'discoverCol'}>
                        <span className={"discoverTitle"}> {HomeTxt.titles.Collections}</span>
                        {HomeTxt.collection.map((item, index) => <span key={index}
                                                                       className={"discoverText"}>{item}</span>)}
                        <br/>
                        <br/>
                        <span className={"discoverTitle"}> {HomeTxt.titles.Service}</span>
                        {HomeTxt.service.map((item, index) => <span key={index}
                                                                    className={"discoverText"}>{item}</span>)}
                    </div>
                    <div className={'discoverCol'}>
                        <span className={"discoverTitle"}>  {HomeTxt.titles.Languages}</span>
                        {HomeTxt.languages.map((item, index) => <span key={index}
                                                                      className={"discoverText"}>{item}</span>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footers;
