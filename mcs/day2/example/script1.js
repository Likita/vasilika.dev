// alert("Привет, JavaScript!");
// var age = prompt("How old are you?", 26);
// console.log(age);
// var isAdult = confirm("Are you adult?");
// console.log(isAdult);
// if (age < 18) {
// 	alert("Иди уроки делай!");
// } else {
// 	alert("Добро пожаловать!");
// }
// var i=0;
// while (i <= 100) {
// 	console.log(i);
// 	i++;
// }
// for (var i = 0; i < 100; i = i + 10) {
// 	console.log(i);
// }

$(document).ready( function(){
	console.log($("[class*='bar']").hasClass("newClass"));
	$("[class*='bar']").addClass("newClass");
	console.log(
		$("[class*='bar']").hasClass("newClass")
	);
	// console.log($("[class*='bar']").length);

	$(".cat").click(function(e){
		alert("Нашли кота!");
	});
});