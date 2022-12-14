import React from "react";

const SceneComponent = () => {
  return <div>SceneComponent</div>;
};

export default SceneComponent;
// import React, { useRef, useEffect } from "react";
// import {
//   Engine,
//   Scene,
//   ArcRotateCamera,
//   HemisphericLight,
//   Vector3,
// } from "@babylonjs/core";
// import "@babylonjs/loaders/glTF";
// import * as BABYLON from "@babylonjs/core";
// import data from "../../../public/house.json";
// import useStore from "../../global-stores/store";
// import navigationUseStore from "../../globalStore/Navigation-Store/navigationStore";

// // UNREQUIRED FILE, TO BE DELETED - USED FOR REFERENCES

// //The zod error is not fixed so donot include and use getFileName() here in any manner.

// // use zod to fetch data about all floors and elements in them in a array format related to each floor, and if the floor is turned off, turn all elements in the floor off. We can use mesh.setEnabled and mesh.isEnabled for the same.

// // procedure to follow : define set of camera views and store states in the zustand store -> implement a button to toggle between them by using useEffect -> add animation to make the transition smooth and remove all values from the useEffect hook dependency array

// const config = {
//   amount: { x: 50, z: 50 },
//   separation: 2,
// };

// const ReactCanvas = ({
//   isWelcomePanelActive,
// }: {
//   isWelcomePanelActive: boolean;
// }) => {
//   const canvasRef = useRef(null);
//   const store = useStore();
//   const navStore = navigationUseStore();
//   const minZ = -((config.amount.z * config.separation) / 2);
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const engine = new Engine(canvas, true);
//     const createScene = function () {
//       const scene = new Scene(engine);
//       const freeCamera = new ArcRotateCamera(
//         "camera",
//         -Math.PI * 3,
//         Math.PI / 2,
//         1000,
//         new Vector3(0, 600, 280),
//         scene
//       );

//       freeCamera.wheelPrecision = 1;
//       freeCamera.panningSensibility = 10;
//       freeCamera.lowerRadiusLimit = 500;
//       freeCamera.upperRadiusLimit = 2000;
//       freeCamera.upperBetaLimit = Math.PI / 2;
//       scene.activeCamera = freeCamera;
//       scene.activeCamera.attachControl(canvas, true);

//       //Light
//       const light = new HemisphericLight(
//         "light",
//         new Vector3(-1, 1, -1),
//         scene
//       );
//       light.intensity = 0.7;

//       //Skybox
//       const skyBox = BABYLON.MeshBuilder.CreateBox(
//         "skyBox",
//         { size: 10000.0 },
//         scene
//       );
//       scene.clearColor = new BABYLON.Color4(0.5, 0.8, 0.5, 0.1);
//       scene.ambientColor = new BABYLON.Color3(0.3, 0.3, 0.3);
//       const skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
//       skyboxMaterial.backFaceCulling = false;
//       skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture(
//         "https://assets.vvplus.cc/misc/skybox",
//         scene,
//         ["_px.png", "_py.png", "_pz.png", "_nx.png", "_ny.png", "_nz.png"]
//       );
//       skyboxMaterial.reflectionTexture.coordinatesMode =
//         BABYLON.Texture.SKYBOX_MODE;
//       skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
//       skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
//       skyBox.material = skyboxMaterial;
//       skyBox.infiniteDistance = true;
//       skyboxMaterial.disableLighting = true;

//       //Fog
//       scene.fogMode = BABYLON.Scene.FOGMODE_LINEAR;
//       scene.fogDensity = 0.001;
//       scene.fogStart = 5000.0;
//       scene.fogEnd = 6000.0;
//       scene.fogColor = new BABYLON.Color3(0.796, 0.769, 0.769);

//       //Ground
//       const groundUrl = "https://assets.vvplus.cc/misc/ground_texture.png";
//       const ground = BABYLON.MeshBuilder.CreateGround("ground", {
//         width: 12000,
//         height: 12000,
//       });
//       ground.position.y = -10;
//       const groundMat = new BABYLON.StandardMaterial("groundMat");
//       groundMat.diffuseTexture = new BABYLON.Texture(groundUrl);
//       groundMat.diffuseTexture.hasAlpha = true;
//       ground.material = groundMat;

//       //Building meshes
//       //code to be refactored more later
//       data.floors.map((element) => {
//         element.floorStructure.map((e) => {
//           BABYLON.SceneLoader.ImportMesh(
//             "",
//             data?.baseUrl || " ",
//             e.file,
//             scene,
//             (newMeshes) => {
//               if (newMeshes[0]) {
//                 newMeshes[0].position.y = 0;
//                 newMeshes[0].position.x = 0;
//                 newMeshes[0].position.z = 300;
//                 newMeshes[0].scaling = new Vector3(40, 40, 40);
//               }
//             }
//           );
//         });
//       });
//       return scene;
//     };
//     const scene = createScene();
//     engine.runRenderLoop(function () {
//       scene.render();
//     });
//     window.addEventListener("resize", function () {
//       engine.resize();
//     });
//   }, [minZ, store.floor]);

//   return (
//     <canvas
//       className={`
//       absolute top-0 w-full h-screen
//       ${isWelcomePanelActive === true ? "z-[1]" : "z-[-100]"}`}
//       ref={canvasRef}
//     ></canvas>
//   );
// };
// export default ReactCanvas;
