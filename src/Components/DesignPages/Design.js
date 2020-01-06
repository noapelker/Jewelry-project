import React, {useState} from 'react';
import '../../CssFolder/Design.css'
import {DesignTxt} from "../../TextBlocks/TextBlocksEN";
import DesignLevelOne from "./DesignLevelOne";
import DesignLevelBase from "./DesignLevelBase";
import DesignLevelSix from "./DesignLevelSix";
import {BrowserRouter, Route} from 'react-router-dom';
import '../../CssFolder/Home.css'


const Design = props => {

    const [type, SetType] = useState('none');
    const changeType = (value) => () => {
        SetType(value);
    };

    return (

        <div>

            <div className={'designContainer'}/>
            <div className={'designPageContainer'}>
                 <span className={'titleDesign'}>
                    {DesignTxt.titles.MainTitle}
                </span>
                <BrowserRouter>
                    <div>
                        <Route exact path="/design"
                               component={() => <DesignLevelOne changeType={changeType}/>}/>
                        <Route exact path="/designStepTwo"
                               component={() => <DesignLevelBase name={type}/>}/>
                        <Route exact path="/designSteps"
                               component={() => <DesignLevelSix name={type}/>}/>

                    </div>
                </BrowserRouter>
            </div>

        </div>
    );
};

export default Design;
