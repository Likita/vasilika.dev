function main() {
	var width = $(window).width() * 1.5;
	var height = $(window).height() * 1.5;
	$(".cola1, .cola3").width(width).height(height);
	var scene = document.getElementById("wrap");
	var parallax = new Parallax(scene);
}
