window.onload = function() {
  PlayerT.init();
}


PlayerT = {
  init: function() {
    PlayerT.container = document.getElementById("webgl-player");

    PlayerT.size = {
      width: PlayerT.container.offsetWidth,
      height: PlayerT.container.offsetHeight
    };

    PlayerT.scene = new THREE.Scene();
    PlayerT.camera = new THREE.PerspectiveCamera(45.0,
      PlayerT.size.width / PlayerT.size.height,
      2,
      2000);
    PlayerT.camera.position.z = 300;
    PlayerT.scene.add(PlayerT.camera);

    PlayerT.light = new THREE.AmbientLight();
    PlayerT.scene.add(PlayerT.light);

    textureLoader = new THREE.TextureLoader();

    textureLoader.load("dino.jpg", function(texture) {
      PlayerT.texture = texture;
      PlayerT.loadModel();
    });

    PlayerT.renderer = new THREE.WebGLRenderer();

    PlayerT.renderer.setSize(PlayerT.size.width, PlayerT.size.height);
    PlayerT.container.appendChild(PlayerT.renderer.domElement);

    PlayerT.controls = new THREE.TrackballControls(PlayerT.camera, PlayerT.container);

    PlayerT.animate();
  },

  loadModel: function() {
    objectLoader = new THREE.PLYLoader();

    objectLoader.addEventListener( 'load', function ( event ) {
      var geometry = event.content;
      var vShader = document.getElementById("vshader").text;
      var fShader = document.getElementById("fshader").text;

      var material = new THREE.ShaderMaterial( { 
        uniforms: {
            u_Sampler: {type: "t", value: PlayerT.texture}
        },
        vertexShader: vShader,
        fragmentShader: fShader,
      } );

      PlayerT.mesh = new THREE.Mesh( geometry, material );

      PlayerT.mesh.position.y = -50;

      PlayerT.scene.add(PlayerT.mesh);
      document.getElementById("preloader").remove();

    } );
    objectLoader.load( 'dino.ply' );

  },

  animate: function() {
    requestAnimationFrame(PlayerT.animate);
    PlayerT.controls.update();
    PlayerT.renderer.render(PlayerT.scene, PlayerT.camera);
  }
};
