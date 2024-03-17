let body = document.querySelector("body");
let p = document.querySelector("p");
let prompt1 = prompt("enter body backgroundColor");
let prompt2 = prompt("enter text color");
function changeBodyColor(a, b) {
  body.style.backgroundColor = `${a}`;
  p.style.color = `${b}`;
}
changeBodyColor()
changeBodyColor(prompt1, prompt2);