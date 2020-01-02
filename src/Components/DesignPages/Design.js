import React, {useState} from 'react';
import '../../CssFolder/Design/Design.css'
import {DesignTxt} from "../../TextBlocks/TextBlocksEN";
import DesignLevelOne from "./DesignLevelOne";
import DesignLevelTwo from "./DesignLevelTwo";

const Design = props => {
    const [Counter, SetCounter] = useState(0);

    const changeToNextPage = (value) => () => {

        if (Counter === 0)
            setPage(<DesignLevelTwo name={value}/>);
        SetCounter(Counter + 1);

    };
    const [CurrentPage, setPage] = useState(<DesignLevelOne nextPage={changeToNextPage}/>);

    return (

        <div>
            <div className={'designContainer'}/>
            <div className={'designPageContainer'}>
                <div className={'titlesContainer'}>
                <span className={'titleDesign'}>
                    {DesignTxt.titles[0]}
                </span>
                    <span className={'textDesign'}>
                    {DesignTxt.titles[Counter + 1]}
                </span>
                </div>
                <br/>
                {CurrentPage}
                {Counter >= 1 &&
                <div className={'buttonsContainerDesign'}>
                    <img alt={''} src={'../../Photos/DesignNextButton.png'}
                         className={'nextButtonDesign prevButtonDesign'}/>
                    <img alt={''} src={'../../Photos/DesignNextButton.png'}
                         className={'nextButtonDesign'}/>


                </div>
                }

            </div>

        </div>
    );
};

export default Design;
