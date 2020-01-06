import React, {Component} from 'react';
import {DesignTxt} from "../../TextBlocks/TextBlocksEN";
import {NavLink} from 'react-router-dom';
import Gallery from 'react-grid-gallery';

class DesignBase extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            images: DesignTxt.DBearring,
            selectedIndex: localStorage.getItem('base') || -1,
        };

        this.onSelectImage = this.onSelectImage.bind(this);

    };

    onSelectImage = (index) => {
        let images = this.state.images.slice();
        if (this.state.selectedIndex !== -1 && this.state.selectedIndex !== index) {
            let prevImg = images[this.state.selectedIndex];
            prevImg.isSelected = false;
        }
        let img = images[index];
        img.isSelected = !img.isSelected;
        this.setState({
            images: images,
            selectedIndex: this.state.selectedIndex === index ? -1 : index
        });
    };

    render() {
        return (
            <div>
                <div className={'designContainer'}/>
                <div className={'designPageContainer'}>
            <span className={'titleDesign'}>
            {DesignTxt.titles.MainTitle}
             </span>
                    <div className={'levelBaseContainer'}>
             <span className={'textBase'}>
                    {DesignTxt.titles.baseStep}
                </span>
                        <div className={'gridContainer'}>
                            <Gallery images={this.state.images} rowHeight={200}
                                     onSelectImage={this.onSelectImage}
                                     showLightboxThumbnails={true} backdropClosesModal={true}/>
                        </div>

                        <NavLink to={"/designStone"}
                                 className={this.state.selectedIndex === -1 ? 'disabled-link' : 'enable-link'}>
                            <img alt={''} src={'../../../Photos/DesignNextButton.png'}
                                 onClick={this.props.changeBase(this.state.selectedIndex)}/>

                        </NavLink>
                    </div>
                </div>
            </div>
                );
                }
                }

                export default DesignBase;