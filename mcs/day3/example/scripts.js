$(document).ready(function(){
	$(".homework").click( function() {
		$(this).toggleClass("active");
	});

	$(".grid").isotope({
		itemSelector: ".grid-item",
  		layoutMode: "fitRows"
	});

	$("#filter-all").click( function() {
		$(".grid").isotope({ filter: "*" });
	});

	$("#filter-cat").click( function() {
		$(".grid").isotope({ filter: ".cat" });
	});

	$("#filter-dog").click( function() {
		$(".grid").isotope({ filter: ".dog" });
	});

	$("#sort-origin").click( function() {
		$(".grid").isotope({ sortBy: "original-order" });
	});

	$("#sort-random").click( function() {
		$(".grid").isotope({ sortBy: "random" });
	});

	lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    })
});