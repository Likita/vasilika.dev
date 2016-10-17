// age = prompt('Сколько вам лет?');

// Условие if
// if (age < 18) {
//   window.location.href = "http://yandex.ru";
// } else if (age < 28) {
//   window.location.href = "http://google.ru";
// } else {
// }

window.onload = function() {
  let usersArray = ['Василика', 'Валерия', 'Оля', 'Лиля', 'Мария', 'Александра'];
  let i = 0;

  // Цикл  while
  // while (i < usersArray.length) {
  //   document.write(usersArray[i]);
  //   i++; // i = i + 1;
  // }


  // Цикл for
  // for(i = 0; i < usersArray.length; i++) {
  //   if (i == 0){
  //     document.write(usersArray[i]);
  //   }
  // }

  document.querySelector('.button1').onclick = function() {
    this.className = this.className + " active";
  };

  document.querySelector('.button2').addEventListener('click', button2Click);

  function button2Click() {
    this.innerText = "Новая кнопка";
  }
}





