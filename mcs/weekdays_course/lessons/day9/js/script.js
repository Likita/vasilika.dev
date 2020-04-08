window.onload = function() {
  $('.photo-gallery').isotope({
    itemSelector: '.img-block',
    layoutMode: 'fitRows'
  });

  let showAll = document.querySelector('.show-all');
  let show1 = document.querySelector('.show1');
  let show2 = document.querySelector('.show2');

  showAll.onclick = function() {
    $('.photo-gallery').isotope({ filter: '*' });
  }

  show1.onclick = function() {
    $('.photo-gallery').isotope({ filter: '.img1' });
  }

  show2.onclick = function() {
    $('.photo-gallery').isotope({ filter: '.img2' });
  }
}