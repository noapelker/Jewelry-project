import React, {Component} from 'react';
import Menu from './Menu';
import Home from './Components/Home'
class Main extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div className={"AppContainer"}/>
                <Menu/>
                <Home />
            </div>
        );
    }
}

export default Main;
