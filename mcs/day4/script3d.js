Player = {
	init: function() {
		Player.container = document.getElementById("canvas-3d");
		Player.size = {
			height: Player.container.offsetHeight,
			width: Player.container.offsetWidth
		};
		Player.scene = new THREE.Scene();

		var aspect = Player.size.width / Player.size.height; 
		Player.camera = new THREE.PerspectiveCamera(45, aspect, 2, 8000);
		Player.camera.position.z = 300;

		Player.scene.add(Player.camera);

		var light = new THREE.AmbientLight();
		Player.scene.add(light);

		Player.renderer = new THREE.WebGLRenderer({alpha: true});
		Player.renderer.setSize(Player.size.width, Player.size.height); 

		Player.container.appendChild(Player.renderer.domElement);

		Player.controls = new THREE.TrackballControls(Player.camera, Player.container);

		var textureLoader = new THREE.TextureLoader();
		textureLoader.load("turtle.jpg", function(texture) {
			Player.texture = texture;
			Player.loadModel();
		});
	},

	loadModel: function() {
		var loader = new THREE.OBJLoader();
		loader.load("turtle.obj", function(object) {
			object.traverse(function(child) {
				if(child instanceof THREE.Mesh) {
					child.material.map = Player.texture; 
				}
			});
			Player.scene.add(object);
			Player.animation();
		});
	},

	animation: function() {
		requestAnimationFrame(Player.animation);
		Player.controls.update();
		Player.renderer.render(Player.scene, Player.camera);
	}


}

window.onload = function(){
	Player.init();
};

