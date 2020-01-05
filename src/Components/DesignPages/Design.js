import React, {useState} from 'react';
import '../../CssFolder/Design/Design.css'
import {DesignTxt} from "../../TextBlocks/TextBlocksEN";
import DesignLevelOne from "./DesignLevelOne";
import DesignLevelSix from "./DesignLevelTwo";
import {BrowserRouter, Route, Link} from 'react-router-dom';

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
                        <Route exact path="/designSteps"
                               component={() => <DesignLevelSix name={type}/>}/>
                    </div>
                </BrowserRouter>
            </div>

        </div>
    );
};

export default Design;
