window.onload = function() {}

$(document).ready(function() {
  console.log( $(".oldClass") );
  $(".oldClass").html("<span>Новый текст</span> у старого элемента");

  $(".slider").click(function(){
    _this = $(this);
    if (_this.hasClass("active")){
      _this.text("Off");
      // $(this).removeClass("active");
    } else {
      _this.text("On");
      // $(this).addClass("active");
    }
    _this.toggleClass("active");
  });
});


