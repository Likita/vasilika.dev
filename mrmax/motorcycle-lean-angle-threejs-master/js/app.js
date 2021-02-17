'use strict';
	//THREE JS Implementation
	Physijs.scripts.worker = '/js/physijs_worker.js';
	Physijs.scripts.ammo = '/js/ammo.js';

	var renderer, scene, camera, light, ground_material, ground_geometry, ground, render, loader, id;
	var created = false;
	var angle = 0;
	var speed = 0;
	var lean = 0;
	var radian = 0;
	var objectLoader;
	var yResult = 0;
	var prevAngle = 0;
	var direction = 0;
	var generated = false;

	function initScene() {
		//Renderer
		renderer = new THREE.WebGLRenderer( { alpha: true } );
		renderer.setClearColor( 0x000000, 0 );
		renderer.setSize( window.innerWidth, window.innerHeight );
		renderer.shadowMap.enabled = true;
		renderer.shadowMapSoft = true;
		document.getElementById( 'viewport' ).appendChild( renderer.domElement );

		//Scene
		scene = new Physijs.Scene({ fixedTimeStep: 1 / 120 });
		scene.setGravity(new THREE.Vector3( 0, -30, 0 ));

		//Camera
		camera = new THREE.PerspectiveCamera(
			90,
			window.innerWidth / window.innerHeight,
			1,
			750
		);
		//camera.position.set( 30, 18, 30 );
		camera.position.set( 0, 0, 25 );
		camera.lookAt( scene.position );
		scene.add( camera );
		
		//Light
		light = new THREE.DirectionalLight( 0xFFFFFF );
		light.position.set( 0, 0, 15 );
		//light.position.set( 20, 40, -15 );
		light.target.position.copy( scene.position );
		light.castShadow = true;
		light.shadowCameraLeft = -60;
		light.shadowCameraTop = -60;
		light.shadowCameraRight = 60;
		light.shadowCameraBottom = 60;
		light.shadowCameraNear = 20;
		light.shadowCameraFar = 200;
		light.shadowBias = -.0001
		light.shadowMapWidth = light.shadowMapHeight = 2048;
		light.shadowDarkness = .7;
		scene.add( light );

		//Generate
		createGround();
		render();
	};

	initScene();

	function render() {
		id = requestAnimationFrame( render );
		if (created) {
			for (var i = scene.children.length - 1; i >= 0 ; i -- ) {
				if (scene.children[i].isMotorcycle) {
					if ((scene.children[i].rotation.y > yResult - 0.05  && scene.children[i].rotation.y < yResult + 0.05)) {
						created = false;
					} 
					if (direction == 0) {	
						scene.children[i].rotation.y = scene.children[i].rotation.y + (yResult / 120); 
					} else if (direction == 1) {
						scene.children[i].rotation.y = scene.children[i].rotation.y - (yResult / 120); 
					}	
				}
			}
		}
		renderer.render( scene, camera );
		scene.simulate();
	};

	$("#search").click(function() {
		createMotorCycle();
		created = true;
	});	

	function createMotorCycle() {
		speed = document.getElementById("speed").value;
		radian = document.getElementById("radian").value;
		if (speed != 0 && radian != 0) {
			lean = calculateLeanAngle(speed, radian);
			//if (convertToDegrees(lean) != 0) {
				prevAngle = angle;
				angle = convertToDegrees(lean);
				objectLoader = new THREE.ObjectLoader();
				//yResult = (180-angle) * Math.PI / 180;;
				yResult = (angle) * Math.PI / 180;;
				document.getElementById("lean").innerHTML = Math.round(angle) + "\xB0";
				calculateSpeedGraph(speed, radian);

				if (angle < prevAngle) {
					direction = 1;
				} else {
					direction = 0;
				}

				if (!generated) {
					generated = true;
					//objectLoader.load("assets/motortest5.json",function ( front ) {
					objectLoader.load("assets/motor.json",function ( front ) {
						front.name = "Motorcycle";
						front.scale.x = 0.03;
				        front.scale.y = 0.03;
				        front.scale.z = 0.03;
						front.rotation.x = -90 * Math.PI / 180;
						front.rotation.z = -180 * Math.PI / 180
           				//front.rotation.y = (180-angle) * Math.PI / 180;
	        			//front.rotation.y = (angle) * Math.PI / 180
	        			front.position.set(0, 0, 0);
				        front.isMotorcycle = true;
			            scene.add( front );
					});
				}
			//}
		}
	}

	function createGround() {
		loader = new THREE.TextureLoader();
				ground_material = Physijs.createMaterial(
			new THREE.MeshLambertMaterial({map: loader.load('assets/road.jpg')}),
			.8, // high friction
			.4 // low restitution
		);
		ground_geometry = new THREE.PlaneGeometry( 20, 20, 50, 50 );
		ground = new Physijs.HeightfieldMesh(
			ground_geometry,
			ground_material,
			0, // mass
			50,
			50
		);
		ground.position.set(0, -3, 0);
		ground.rotation.x = -Math.PI / 3;
		ground.rotation.z = Math.PI / -2;
		ground.receiveShadow = true;
		ground.name = "floor";
		scene.add( ground );
	}

	function calculateLeanAngle(speed, radian) {
		var friction = (Math.pow(speed, 2)) / (9.81 * radian);
		var answer = Math.atan(friction);
		return answer;
	}

	function convertToDegrees(radians) {
		return (radians * 180) / Math.PI
	}

	function convertToAngle(angle) {
		return (angle * Math.PI) / 180;
	}    

	function calculateRadianGraph(speed, radian) {
		var radianArray = [];
		for (var i = 0; i < 300; i++) {
			var radianLeanAngle = calculateLeanAngle(parseInt(speed), parseInt(i));
			var radianAngle = convertToDegrees(radianLeanAngle)
			radianArray.push(radianAngle);
		}
		drawGraph(radianArray);
	}

	function calculateSpeedGraph(speed, radian) {
		var speedArray = [];
		for (var i = 0; i < 300; i++) {
			var speedLeanAngle = calculateLeanAngle(parseInt(i), parseInt(radian));
			var speedAngle = convertToDegrees(speedLeanAngle)
			speedArray.push(speedAngle);
		}
		drawGraph(speedArray);
	}

	function drawGraph(data) {
		// define dimensions of graph
		var m = [80, 80, 80, 80]; // margins
		var w = 1000 - m[1] - m[3]; // width
		var h = 400 - m[0] - m[2]; // height

		var x = d3.scale.linear().domain([0, data.length]).range([0, w]);
		var y = d3.scale.linear().domain([0, d3.max(data)]).range([h, 0]);

		var line = d3.svg.line()
			.x(function(d, i) { 
				return x(i); 
			})
			.y(function(d) { 
				return y(d); 
			})

		var graph = d3.select("#graph").append("svg:svg")
	      .attr("width", w + m[1] + m[3])
	      .attr("height", h + m[0] + m[2])
	      .append("svg:g")
	      .attr("transform", "translate(" + m[3] + "," + m[0] + ")");

		var xAxis = d3.svg.axis().scale(x).tickSize(-h).tickSubdivide(true);

		graph.append("svg:g")
	      .attr("class", "x axis")
	      .attr("transform", "translate(0," + h + ")")
	      .call(xAxis);

     	graph.append("text")     
          .attr("x",  w/2)
          .attr("y",  h + m[0] / 2)
          .style("text-anchor", "middle")
          .text("Speed (mph");

	    graph.append("text")     
	      .attr("x",  0)
	      .attr("y",  h / 2)
	      .style("text-anchor", "middle")
	      .text("Lean Angle (\xB0)");

	      graph.append("text")     
	      .attr("x",  w / 2)
	      .attr("y",  0)
	      .style("text-anchor", "middle")
	      .text("Speed vs Lean Angle");

		var yAxisLeft = d3.svg.axis().scale(y).ticks(4).orient("left");
		graph.append("svg:g")
	      .attr("class", "y axis")
	      .attr("transform", "translate(-25,0)")
	      .call(yAxisLeft);
	
		graph.append("svg:path").attr("d", line(data));

		var tooltip = d3.select("body")
		.append("div")
		.style("position", "absolute")
		.style("z-index", "10")
		.style("visibility", "hidden")
		.text("a simple tooltip");		
	}
