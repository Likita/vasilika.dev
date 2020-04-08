$(document).ready(function(){
  
  $(".grid").isotope({
    itemSelector: '.grid-item',
    layoutMode: 'fitRows'
  });

  $(".filter-all").click(function(){
    $(".grid").isotope({ filter: '*' });
  });

  $(".filter-dog").click(function(){
    $(".grid").isotope({ filter: '.dog' });
  });

  $(".filter-cat").click(function(){
    $(".grid").isotope({ filter: '.cat' });
  });

  $(".sort-original").click(function(){
    $(".grid").isotope({ sortBy : 'original-order' });
  });

  $(".sort-random").click(function(){
    $(".grid").isotope({ sortBy : 'random' });
  });

});