import React, {Component} from 'react';
import * as THREE from "three";
import {OBJLoader, MTLLoader} from "three-obj-mtl-loader"
import OrbitControls from "three-orbitcontrols";

OBJLoader(THREE);
let freedomMesh, loader, mtlLoader, objLoader,lights,scene ;

class ThreeObject extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render() {
        return (
            <div>
            </div>
        );
    }
}

export default ThreeObject;