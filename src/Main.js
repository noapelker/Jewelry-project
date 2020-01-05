import React, {Component} from 'react';
import Menu from './Components/Menu';
import Home from './Components/Home'
import Design from "./Components/DesignPages/Design";
import DesignLevelSix from "./Components/DesignPages/DesignLevelTwo";
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import Create from "./Components/Create";
import Explore from "./Components/Explore";

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
                        <Route exact path="/"
                               component={Home}/>
                        <Route exact path="/design"
                               component={() => <Design/>}/>

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
