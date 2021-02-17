import * as THREE from "./lib/three.module.js";

import { EffectComposer } from "./lib/EffectComposer.js";
import { RenderPass } from "./lib/RenderPass.js";
import { GlitchPass } from "./lib/GlitchPass.js";
import Stats from "./lib/stats.module.js";
import { OrbitControls } from "./lib/OrbitControls.js";
import { FBXLoader } from "./lib/FBXLoader.js";

var mixer, stats;
var container, controls;
var camera, scene, renderer, light, composer, sprite2;
var camera2, scene2, renderer2, light2;
var clock = new THREE.Clock();

init2();
animate2();

function init2() {
  container = document.querySelector(".model");
  camera2 = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    1500000
  );
  camera2.position.set(-5269, 250675, 356847);

  scene2 = new THREE.Scene();
  scene2.background = new THREE.Color(0xa0a0a0);
  scene2.fog = new THREE.Fog(0xa0a0a0, 400000, 1000000);
  light2 = new THREE.HemisphereLight(0xdddddd, 0x444444);
  light2.position.set(-6000, 300000, 357000);
  scene2.add(light2);

  scene2.add(new THREE.AmbientLight(0x666666));

  light2 = new THREE.DirectionalLight(0x555555);
  light2.position.set(-6000, 300000, 360000);
  light2.castShadow = true;
  light2.shadow.camera.top = 100;
  light2.shadow.camera.bottom = -100;
  light2.shadow.camera.left = -6000;
  light2.shadow.camera.right = 6000;
  scene2.add(light2);

  // scene2.add( new THREE.CameraHelper( light2.shadow.camera ) );

  // ground
  var mesh = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(2000000, 2000000),
    new THREE.MeshPhongMaterial({ color: 0x999999, depthWrite: false })
  );
  mesh.rotation.x = -Math.PI / 2;
  mesh.receiveShadow = true;
  scene2.add(mesh);

  var grid = new THREE.GridHelper(2000000, 20, 0x000000, 0x000000);
  grid.material.opacity = 0.2;
  grid.material.transparent = true;
  scene2.add(grid);

  var loader = new FBXLoader();
  loader.load("./bellydancing.fbx", function (object) {
    document.querySelector(".lds-default").remove();
    document.querySelector(".model").classList.remove('disable');
    mixer = new THREE.AnimationMixer(object);

    var action = mixer.clipAction(object.animations[0]);
    action.play();

    object.traverse(function (child) {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });

    scene2.add(object);
  });

  // var axesHelper = new THREE.AxesHelper( 200000 );
  // scene2.add( axesHelper );

  renderer2 = new THREE.WebGLRenderer({ antialias: true });
  renderer2.setPixelRatio(window.devicePixelRatio);
  renderer2.setSize(window.innerWidth, window.innerHeight);
  renderer2.shadowMap.enabled = true;
  container.appendChild(renderer2.domElement);

  controls = new OrbitControls(camera2, renderer2.domElement);
  controls.minDistance = 100000;
  controls.maxDistance = 1500000;
  controls.maxZoom = 1;
  controls.minZoom = 1;
  controls.target.set(0, 100, 0);
  controls.update();

  window.addEventListener("resize", onWindowResize2, false);

  // stats = new Stats();
  // container.appendChild(stats.dom);
}

function onWindowResize2() {
  camera2.aspect = window.innerWidth / window.innerHeight;
  camera2.updateProjectionMatrix();

  renderer2.setSize(window.innerWidth, window.innerHeight);
}

function animate2() {
  requestAnimationFrame(animate2);

  var delta = clock.getDelta();

  if (mixer) mixer.update(delta);

  renderer2.render(scene2, camera2);

  // stats.update();
  controls.update();
}
