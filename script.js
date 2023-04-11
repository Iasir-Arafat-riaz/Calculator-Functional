const display = document.getElementById("display");
// console.log(typeof display.innerText);
let total = 0;

const numbers = document.getElementsByClassName("numbers");
for (let number of numbers) {
  number.addEventListener("click", function (e) {
    // console.log(e.target.innerText);
    if (display.innerText == "0") {
      display.innerText = "";
    }
    if (display.innerText.length < 13) {
      display.innerText += e.target.innerText;
    }
  });
}
document.getElementById("ac").addEventListener("click", function () {
  display.innerText = 0;
  total = 0;
});

const operators = document.getElementsByClassName("operator");
for (let operator of operators) {
  operator.addEventListener("click", function (e) {
    if (
      display.innerText[display.innerText.length - 1] == "+" ||
      display.innerText[display.innerText.length - 1] == "-" ||
      display.innerText[display.innerText.length - 1] == "*" ||
      display.innerText[display.innerText.length - 1] == "/"
    ) {
      return;
    }
    if (display.innerText.length < 13) {
      display.innerText += e.target.innerText;
    }
  });
}
const dotFloat = document.getElementById("float");

dotFloat.addEventListener("click", function (e) {
  if (display.innerText[display.innerText.length - 1] == ".") {
    return;
  }
  if (display.innerText.length < 13) {
    display.innerText += e.target.innerText;
  }
});
document.getElementById("equal").addEventListener("click", () => {
  console.log("clicked equal");
  display.innerText = eval(display.innerText);
  if (display.innerText.length < 13) {
    return;
  }
});
