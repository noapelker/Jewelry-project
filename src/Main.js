import React, {Component} from 'react';
import Menu from './Components/Menu';
import Home from './Components/Home'
import Design from "./Components/DesignPages/Design";

class Main extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render() {
        return (
            <div>
                {/*<Home />*/}
                <Design/>
                <Menu/>

            </div>
        );
    }
}

export default Main;
