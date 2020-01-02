import React from 'react';

const DesignLevelTwo = props => {
    return (
        <div className={'designPageContainer'}>

            <input type={'text'} placeholder={ ' Choose your ' +props.name.toLocaleLowerCase()+ ' name...'} className={'nameDesign'}/>



            <br/>
        </div>
    );
};

export default DesignLevelTwo;
