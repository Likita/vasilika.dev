//-- Возвести в квадрат число
// let num = prompt('Введите число');

// function powFunction(n){
//   let result = n * n;
//   document.write(result);
// }

// powFunction(num);


//-- Вывести приветствие к имени
// let name = prompt('Введите имя');

// function greetFunction(n){
//   let result = "Привет, " + n;
//   document.write(result);
// }

// greetFunction(name);

$(document).ready(function(){

  // События - Навести мышку на элемент и убрать мышку с элемента 
  // $('div:first-child')
  // .mouseover(function(){
  //   $(this).addClass('hover').html('New text');
  //   $('div:last-child').css('color', 'pink');
  // })
  // .mouseout(function(){
  //   $(this).removeClass('hover').html('Текст');
  // });

  // Плавно раскрывать элемент
  $('.parent-menu').click(function(){
    $('.submenu').slideToggle('slow');
    // clearInterval(timer);
  });
});


//-- Обработка изменения размеров экрана
window.addEventListener('resize', onResize);

function onResize() {
  console.log('Был изменен размер окна браузера');
}

// Таймер срабытывает 1 раз
// setTimeout(callAlert, 3000);

// function callAlert() {
//   alert('Прошло 3 секунды!');
// }


// Таймер работает пока его принудительно не остановят
// let timer = setInterval(addText, 3000);

// function addText() {
//   $('.my-class2').append('Прошло 3 секунды!');
// }
