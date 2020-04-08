$(document).ready( function(){
	$(".cola1, .cola2").width($(window).width()*2).height($(window).height()*2);
	var scene = document.getElementById("scene");
	var parallax = new Parallax(scene);
	
	$("#image").reel({ 
                          cursor: 'ew-resize',
                          preloader: 0,
                          frames: 24
                      });
});