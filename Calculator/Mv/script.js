let equal_pressed = 0;
//Refer all buttons excluding AC and DEL
let button_input = document.querySelectorAll(".input-button");
let display = document.querySelector("#input");
//Refer input,equal,clear and erase
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");
let equation = "";
button_input.forEach((input) => {
  input.addEventListener("click", () => {
    equation += `${input.value}`;
    console.log(typeof equation);
    display.value = equation;
    console.log(typeof equation);
  });
});
erase.addEventListener("click", () => {
  equation.toString();
  equation = equation.slice(0, -1);
  display.value = equation;
});
equal.addEventListener("click", () => {
  equation = eval(equation);
  display.value = Math.trunc(parseFloat(equation));
});
clear.addEventListener("click", () => {
  equation = ``;
  display.value = "";
});
