import React from 'react';
import {MenuTxt} from '../TextBlocks/TextBlocksEN'
const Menu = props => {
    return (

        <div className={"menuContainer"} >
            <div className={"sideContainer leftMenu"}>
                <img alt={""} className={"menuImage menuImageLeft"} src={'../Photos/Menu.png'}/>
                <div className={"rightTextContainer"}>
                <span className={"rightText"}>{MenuTxt.titles[0]}</span>
                <span className={"rightText"}>{MenuTxt.titles[1]}</span>
                <span className={"rightText"}>{MenuTxt.titles[2]}</span>
                </div>
            </div>
            <div className={"sideContainer centerMenu"}>
                <span>logo</span>
            </div>
            <div className={"sideContainer rightMenu"}>
                <img alt={""} className={"menuImage menuImageRight"} src={'../Photos/Heart.png'}/>
                <img alt={""} className={"menuImage menuImageRight"} src={'../Photos/User.png'}/>
            </div>
        </div>

    );
};

export default Menu;
