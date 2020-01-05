import React from 'react';
import {MenuTxt} from '../TextBlocks/TextBlocksEN'
import {NavLink} from 'react-router-dom';

const Menu = props => {
    return (

        <div className={"menuContainer"}>
            <div className={"sideContainer leftMenu"}>
                <img alt={""} className={"menuImage menuImageLeft"} src={'../Photos/Menu.png'}/>
                <div className={"rightTextContainer"}>
                    <NavLink to="/">
                        <span className={"rightText"}>{MenuTxt.titles.Home}</span>
                    </NavLink>
                    <NavLink to="/explore">
                        <span className={"rightText"}>{MenuTxt.titles.Explore}</span>
                    </NavLink>
                    <NavLink to="/create">
                        <span className={"rightText"}>{MenuTxt.titles.Create}</span>
                    </NavLink>
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
