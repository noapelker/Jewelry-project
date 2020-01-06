import React, {Component} from 'react';
import Menu from './Components/Menu';
import Home from './Components/Home'
import Design from "./Components/DesignPages/Design";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Create from "./Components/Create";
import Explore from "./Components/Explore";
import '../src/CssFolder/Design.css'

class Main extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {};
    }



    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path={["/design", "/designBase", "/designStone"]} component={() => <Design/>}/>
                        <Route exact path="/create" component={Create}/>
                        <Route exact path="/explore" component={Explore}/>
                    </Switch>
                    <Menu/>

                </div>
            </BrowserRouter>
        )
            ;
    }
}

export default Main;
