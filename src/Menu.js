import React from 'react';
import './CssFolder/Menu.css';

const Menu = props => {
    return (
        <div className={"menuContainer"} >
            <div className={"sideContainer leftMenu"}>
                <img alt={""} className={"menuImage menuImageLeft"} src={'../Photos/menu.png'}/>
                <div className={"rightTextContainer"}>
                <span className={"rightText"}>Explore</span>
                <span className={"rightText"}>Create</span>
                <span className={"rightText"}>Use</span>
                </div>
            </div>
            <div className={"sideContainer centerMenu"}>
                <span>logo</span>
            </div>
            <div className={"sideContainer rightMenu"}>
                <img alt={""} className={"menuImage menuImageRight"} src={'../Photos/heart.png'}/>
                <img alt={""} className={"menuImage menuImageRight"} src={'../Photos/user.png'}/>
            </div>
        </div>

    );
};

export default Menu;
