let body = document.querySelector("body");
let form = document.createElement("form");

createInput("input");
////////////////////Ivesties funkcija////////////////////
function createInput(text1) {
  body.appendChild(form);
  let inputName = document.createElement("input");
  inputName.classList.add(text1);
  inputName.setAttribute("placeholder", "Type text");
  inputName.setAttribute("type", "text");
  form.appendChild(inputName);
  let formatedString = document.createElement("h1");
  formatedString.classList.add("output");
  body.appendChild(formatedString);
}

/////////////////////Atvaizdavimo funkcija///////////////////////
let input = document.querySelector(".input");
input.addEventListener("input", (e) => {
  let inputString = e.target.value;
  let output = document.querySelector(".output");
  output.innerHTML = stringFormatter2(inputString);
});

/////////////////////Apdorojimo Funkcija////////////////
function stringFormatter2(inputString) {
  let start = "";
  for (let i = 0; i < inputString.length; i++) {
    start +=
      inputString.substring(i, i + 1).toUpperCase() +
      inputString
        .substring(i, i + 1)
        .repeat(i)
        .toLowerCase() +
      "-";
  }
  console.log(start);
  return start;
}
