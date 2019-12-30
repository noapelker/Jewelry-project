import React from 'react';
import '../CssFolder/Home.css'

const Home = props => {
    return (
        <div>
            <div className={"textContainer"}>
                <span className={"homeTitle"}>Create your own style</span>
                <p className={"homeText"}> Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed
                    diam nonummy nibh
                    euismod tincidunt ut laoreet dolore magna aliquam erat
                    volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                </p>
            </div>
            <div className={'imgContainer'}>
                <div className={'imageHomeContainer'} style={{paddingRight: 10}}>
                    <span className={'imgText'}>  Create your own style </span>

                    <img alt={' '} className={'imageHome'}
                         src={'../../Photos/modelHome1.jpeg'}/>
                </div>
                <div className={'imageHomeContainer'} style={{paddingRight: 10}}>
                    <span className={'imgText'}>  Find ready design</span>

                    <img alt={' '} className={'imageHome'}
                         src={'../../Photos/modelHome2.jpeg'}/>
                </div>
                <div className={'imageHomeContainer'}>
                    <span className={'imgText'}>  Create your own line</span>
                    <img alt={' '} className={'imageHome'} src={'../../Photos/modelHome3.jpg'}/>
                </div>
            </div>
            <div className={"textContainerLast"}>
                <span className={"homeTitle"}>Discover Logo</span>
                <p className={"homeText"}> Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed
                    diam nonummy nibh
                    euismod tincidunt ut laoreet dolore magna aliquam erat
                    volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                </p>
                <div className={'discoverParent'}>
                    <div className={'discoverContainer'}>
                        <div className={'discoverCol'}>
                            <span className={"discoverTitle"}> Official channels</span>
                            <span className={"discoverText"}>Facebook</span>
                            <span className={"discoverText"}>Instagram</span>
                            <span className={"discoverText"}>Youtube</span>
                            <span className={"discoverText"}>Pinterest</span>
                            <br/>
                            <br/>
                            <span className={"discoverTitle"}> Legal notice</span>
                            <span className={"discoverText"}>Terms of use</span>
                            <span className={"discoverText"}>Privacy notice</span>
                            <span className={"discoverText"}>Cookies</span>

                        </div>
                        <div className={'discoverCol'}>
                            <span className={"discoverTitle"}> Our collection</span>
                            <span className={"discoverText"}>Classic</span>
                            <span className={"discoverText"}>Modern</span>
                            <span className={"discoverText"}>Magical</span>
                            <span className={"discoverText"}>Modern</span>
                            <span className={"discoverText"}>Unique</span>
                            <span className={"discoverText"}>Diamond</span>
                            <br />
                            <br />
                            <span className={"discoverTitle"}> Service</span>
                            <span className={"discoverText"}>Contact us</span>
                            <span className={"discoverText"}>Our delivery</span>
                            <span className={"discoverText"}>FAQ</span>

                        </div>
                        <div className={'discoverCol'}>
                            <span className={"discoverTitle"}> Languages</span>
                            <br/>
                            <span className={"discoverText"}>English</span>
                            <span className={"discoverText"}>Italian</span>
                            <span className={"discoverText"}>简体中文</span>
                            <span className={"discoverText"}>Hebrew</span>
                            <span className={"discoverText"}>繁體中文</span>
                            <span className={"discoverText"}>Русский</span>
                            <span className={"discoverText"}> Polski</span>
                            <span className={"discoverText"}> Français</span>
                            <span className={"discoverText"}> Deutsch</span>
                            <span className={"discoverText"}> Español</span>
                            <span className={"discoverText"}> 日本語</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
