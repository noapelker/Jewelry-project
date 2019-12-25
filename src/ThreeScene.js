import React, {Component} from "react";
import * as THREE from "three";
import {OBJLoader, MTLLoader} from "three-obj-mtl-loader"
import OrbitControls from "three-orbitcontrols";
import {FileLoader} from "three";

let freedomMesh, loader, mtlLoader, objLoader, lights, scene;

class ThreeScene extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            mount: undefined
        };
    }

    componentDidMount() {
        const width = this.state.mount.clientWidth;
        const height = this.state.mount.clientHeight;
        scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        this.camera.position.set(5,0,5);
        this.renderer = new THREE.WebGLRenderer({antialias: true});
        this.renderer.setClearColor("#263238");
        this.renderer.setSize(width, height);
        this.state.mount.appendChild(this.renderer.domElement);

        new OrbitControls(this.camera, this.renderer.domElement);
        this.loadObject(this.props.name,this.props.scale)
        this.renderScene();

        //start animation
        this.start();
        this.loadLight();
    }

    //When component removed from dom
    componentWillUnmount() {
        this.stop();
        this.state.mount.removeChild(this.renderer.domElement);
    }

    loadObject = (name,scale) => {

        // load material
        mtlLoader = new MTLLoader();
        mtlLoader.setBaseUrl("./assets/");
        mtlLoader.load("./" + name + ".mtl", function (materials) {
            materials.preload();

            // load Object
            objLoader = new OBJLoader();
            objLoader.setMaterials(materials);
            objLoader.load(
                "./assets/" + name + ".obj",
                function (object) {
                    freedomMesh = object;
                    freedomMesh.position.setY(-2); //or  this
                    freedomMesh.scale.set(scale, scale, scale);
                    scene.add(freedomMesh);
                },
                function (xhr) {
                    console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
                },
                // called when loading has errors
                function (error) {
                    console.log("An error happened" + error);
                }
            );
        });
    };

    loadLight = () => {

        //LIGHTS
        lights = [];
        lights[0] = new THREE.PointLight(0x304ffe, 1, 0);
        lights[1] = new THREE.PointLight(0xffffff, 1, 0);
        lights[2] = new THREE.PointLight(0xffffff, 1, 0);
        lights[0].position.set(0, 200, 0);
        lights[1].position.set(100, 200, 100);
        lights[2].position.set(-100, -200, -100);
        scene.add(lights[0]);
        scene.add(lights[1]);
        scene.add(lights[2]);
    };

    //Create animation
    start = () => {
        if (!this.frameId) {
            this.frameId = requestAnimationFrame(this.animate);
        }
    };

    stop = () => {
        cancelAnimationFrame(this.frameId);
    };

    //The animation
    animate = () => {

        if (freedomMesh) freedomMesh.rotation.y += 0.01;
        this.renderScene();
        this.frameId = window.requestAnimationFrame(this.animate);
    };
    renderScene = () => {
        if (this.renderer) this.renderer.render(scene, this.camera);
    };

    onLoad = texture => {
        // load material
        mtlLoader = new MTLLoader();
        mtlLoader.setBaseUrl("assets");

        mtlLoader.load("./eyeball.mtl", function (materials) {
            materials.preload();
            // load Object
            objLoader = new OBJLoader();
            objLoader.setMaterials(materials.materialsInfo);
            objLoader.load(
                "./assets/eyeball.obj",
                function (object) {
                    freedomMesh = object;
                    freedomMesh.position.setY(0); //or  this
                    freedomMesh.scale.set(0.02, 0.02, 0.02);
                    scene.add(freedomMesh);
                },
                function (xhr) {
                    console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
                },
                // called when loading has errors
                function (error) {
                    console.log("An error happened" + error);
                }
            );
        });

        this.renderScene();

        //start animation
        this.start();
    };

    onProgress = xhr => {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    };

    // Function called when download errors
    onError = error => {
        console.log("An error happened" + error);
    };

    render() {

        return (
            <div
                style={{width: 200, height: 200}}
                ref={mount => {
                    this.state.mount = mount;
                }}
            />
        );
    }
}

export default ThreeScene;
