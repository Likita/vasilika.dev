$(document).ready( function(){

  $('.grid').isotope({
    // options
    itemSelector: '.grid-item',
    layoutMode: 'fitRows'
  });

  
  $('.filter-all').click( function(){
    $('.grid').isotope({ filter: '*' });
  });

  $('.filter-cat').click( function(){
    $('.grid').isotope({ filter: '.cat' });
  });

  $('.filter-dog').click( function(){
    $('.grid').isotope({ filter: '.dog' });
  });

  $('.sort-original').click( function(){
    $('.grid').isotope({ sortBy: 'original-order' });
  });

  $('.sort-random').click( function(){
    $('.grid').isotope({ sortBy: 'random' });
  });

});
