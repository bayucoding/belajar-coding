const textBox = document.getElementById("textBox");
const toFarenheit = document.getElementById("toFarenheit");
const toCelcius = document.getElementById("toCelcius");
const result = document.getElementById("result");
let temp;

function convert(){

  if (toFarenheit.checked) {
    temp = Number(textBox.value); 
    temp = temp * 9 / 5 + 32;
    //untuk menampilkan simbol derajat : ALT + 0176
    result.textContent = `Temperature from ${textBox.value} Celcius to Farenheit is :` + " " + temp.toFixed(1) + "°F";

  }else if (toCelcius.checked) {
    temp = Number(textBox.value); 
    temp = (temp-32) * (5/9);
    //untuk menampilkan simbol derajat : ALT + 0176
    result.textContent = `Temperature from ${textBox.value} Farenheit to Celcius is :` + " " + temp.toFixed(1) + "°C";

  }else{
     result.textContent = "You are not select the units yet";
  }
}