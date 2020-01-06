import React, {useState} from 'react';
import '../../CssFolder/Design.css'
import {DesignTxt} from "../../TextBlocks/TextBlocksEN";
import DesignLevelOne from "./DesignLevelOne";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import '../../CssFolder/Home.css'
import DesignBase from "./DesignBase";
import DesignStone from "./DesignStone";


const Design = props => {

    const [type, SetType] = useState('none');
    const [base, SetBase] = useState(localStorage.getItem('base')||0);


    return (

        <div>


                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route exact path="/design"
                                   component={() => <DesignLevelOne changeType={(value) => () => {
                                       SetType(value)
                                   }}/>}/>
                            <Route exact path="/designBase"
                                   component={() => <DesignBase name={type}
                                                                changeBase={(value) => () => {
                                                                    SetBase(value);
                                                                    localStorage.setItem('base',value);

                                                                }}/>}/>
                            <Route exact path="/designStone"
                                   component={() => <DesignStone base={base}/>}/>
                        </Switch>

                    </div>
                </BrowserRouter>


        </div>
    );
};

export default Design;
