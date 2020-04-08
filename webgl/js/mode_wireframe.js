window.onload = function() {
  Player.init();
}

Player = {
  init: function() {
    this.requestId = 0
    this.playAnimate = true

    Player.container = document.getElementById("webgl-player");

    this.noRender();
    Player.container.onmousedown = this.noRender
    Player.container.onmousemove = this.noRender


    wireframe = document.getElementById("mode-wireframe");
    wireframe.onclick = this.toggleWireframe

    Player.size = {
      width: Player.container.offsetWidth,
      height: Player.container.offsetHeight
    };

    Player.scene = new THREE.Scene();

    Player.camera = new THREE.PerspectiveCamera(45.0, Player.size.width / Player.size.height, 2, 8000);
    Player.camera.position.z = 300;
    Player.scene.add(Player.camera);

    Player.light = new THREE.AmbientLight(0xffffff);
    Player.scene.add(Player.light);
    
    textureLoader = new THREE.TextureLoader();

    textureLoader.load("./object/earth.jpg", function(texture) {
      material =new THREE.MeshPhongMaterial({map: texture});
      geometry = new THREE.SphereGeometry(100, 50, 50);
      Player.mesh = new THREE.Mesh(geometry, material);
      Player.scene.add(Player.mesh);
      document.getElementById("preloader").remove();
    });

    Player.renderer = new THREE.WebGLRenderer({alpha: true});

    Player.renderer.setPixelRatio(window.devicePixelRatio);
    Player.renderer.setSize(Player.size.width, Player.size.height);
    Player.container.appendChild(Player.renderer.domElement);
    Player.controls = new THREE.TrackballControls(Player.camera, Player.container);

    Player.controls.rotateSpeed = 2.5
    Player.controls.zoomSpeed = 0.2
    Player.controls.panSpeed = 0.2
    Player.controls.noZoom = false
    Player.controls.noPan = false
    Player.controls.staticMoving = false
    Player.controls.dynamicDampingFactor = 0.1

    window.addEventListener("resize", Player.onWindowResize, false);

    Player.animate();
  },

  animate: function() {
    if (!Player.playAnimate && Player.requestId){
      cancelAnimationFrame(Player.requestId);
      return false;
    }
    if (Player.mesh) {
        Player.mesh.rotation.y += 0.01;
    }
    Player.requestId = requestAnimationFrame(Player.animate);
    Player.controls.update();
    Player.renderer.render(Player.scene, Player.camera);
  },

  noRender: function() {
    if(!Player.playAnimate){
      Player.playAnimate = true;
      Player.animate();
    }
    if (Player.noRenderTimer)
      clearInterval(Player.noRenderTimer);
    Player.noRenderTimer = setInterval("Player.playAnimate = false", 5000)
  },

  toggleWireframe: function() {
    if(Player.mesh.material.wireframe)
      Player.mesh.material.wireframe = false
    else
      Player.mesh.material.wireframe = true
    Player.noRender();
  },

  onWindowResize: function() {
    Player.camera.aspect = Player.container.offsetWidth / Player.container.offsetHeight;
    Player.camera.updateProjectionMatrix();
    Player.renderer.setSize(Player.container.offsetWidth, Player.container.offsetHeight);
  }
};
