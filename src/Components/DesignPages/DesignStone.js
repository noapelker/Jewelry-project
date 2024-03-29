import React, {Component} from 'react';
import {DesignTxt} from "../../TextBlocks/TextBlocksEN";
import '../../CssFolder/Stones.css'
import DesignModel from "./DesignModel";
import SortMenu from "../SortMenu";
import Gallery from 'react-grid-gallery';
import ChosenStones from './ChosenStones'

class DesignStone extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            images: DesignTxt.DBStones,
            chosenImages: [{}]
        };

    }

    onSelectImage = (index) => {
        let images = DesignTxt.DBStones.slice();
        let img = images[index];
        let selectedImages = this.state.chosenImages.slice();
        selectedImages.push(img);
        this.setState({chosenImages: selectedImages})

    };
    removeFromArray = (value) => {
        let images = this.state.chosenImages.slice();
        for (let j = value; j < images.length - 1; j++) {
            images[j] = images[j + 1];
        }
        this.setState({
            chosenImages: images.slice(0, images.length - 1),
        });
    };

    render() {
        return (
            <div>
                <div className={'designContainer'}/>
                <div className={'stonesContainer'}>
                <span className={'titleDesign'}>
                    {DesignTxt.titles.MainTitle}
                </span>
                    <span className={'textStones'}>
                     {DesignTxt.DBearring[this.props.base].tags[0].value}
                      </span>
                    <div className={'levelStoneContainer'}>

                        <div className={'sortModelParent'}>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                height: 'fit-content'
                            }}>
                                <DesignModel image={DesignTxt.DBearring[this.props.base].src}/>
                                <ChosenStones onSelectImage={this.removeFromArray}
                                              options={this.state.chosenImages}/>
                            </div>
                            <div className={'stonesSubContainer'}>
                                <SortMenu/>
                                <Gallery images={DesignTxt.DBStones} rowHeight={110}
                                         enableLightbox={true}
                                         onSelectImage={this.onSelectImage}
                                         showLightboxThumbnails={true} backdropClosesModal={true}/>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        );
    }
}

export default DesignStone;
