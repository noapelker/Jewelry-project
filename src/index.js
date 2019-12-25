import React from "react";
import ReactDOM from "react-dom";
import ThreeScene from "./ThreeScene";

import "./styles.css";

const names = ["eyeball", "freedom", "eyeball", "freedom"]
const scale = [1, 0.02, 1, 0.02]

function App() {
    return (
        <div
            className="App"
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: 'space-between',
                width: '100%',

            }}>
            {names.map((item, index) => <ThreeScene name={item} key={index} scale={scale[index]}/>)}


        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);



