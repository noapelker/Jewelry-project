import React from 'react';
import {DesignTxt} from "../TextBlocks/TextBlocksEN";
import '../CssFolder/sortMenu.css'
import Select from 'react-select';

const SortMenu = props => {
    return (
        <div className={'sortMenuContainer'}>
            <Select placeholder={'Stones...'} options={DesignTxt.DBOptionsType} isMulti/>
            <Select placeholder={'Colors...'} options={DesignTxt.DBOptionsColor}/>
        </div>
    );
};

export default SortMenu;