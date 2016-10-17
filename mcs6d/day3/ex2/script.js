k = 5;

console.log(k + "5");
surname = "Klimova";

// var myName = prompt("What is your name");



// function showName(){
//   var string = "My name is " + myName;
//   document.write(string);
// };


// function showSurname(){
//   var string = " My surname is " + surname;
//   document.write(string);
// };

// showName();
// showSurname();

// alert(name);
// alert(surname);
// var answer = confirm("А вам есть 18?");

// if (answer) {
//   alert("Молодец!");
// } else {
//   window.location.href = "http://yandex.ru";
// }

if (k > 5) {
  document.write("k > 5");
} else if (k < 5) {
  document.write("k < 5");
} else {
  document.write("k = 5");
}

myArray = [5, 5, 3, 2];
console.log(myArray.length);
myArray[4] = 10;

while(k < 10) {
  document.write("Blablabla ");
  k++; // k = k + 1;
}

for (i = 0; i < myArray.length; i++) {
  console.log("Элемент массива " + i + ": " + myArray[i]);
}

window.onload = function() {
  myElement = document.getElementById("element");
  myDivs = document.getElementsByTagName("div");
  myElement.style.color = "red";
}

myObject = {
  weight: 50,
  height: 160,
  showWeight: function() {
    document.write("Object weight: " + this.weight);
  },
  showHeight: function() {
    document.write("Object weight: " + this.height);
  }
}

myObject.showWeight();
myObject.showHeight();



