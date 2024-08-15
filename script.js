let equal_pressed = 0;
// Reffer all buttons excluding AC and DEL

let button_input = document.querySelectorAll(".input-button");

// refer input,equal,clear,erase
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");

window.onload = () => {
  input.value = "";
};

// Access each class using forEach

button_input.forEach((button_class) => {
  button_class.addEventListener("click", () => {
    if (equal_pressed == 1) {
      input.value = "";
      equal_pressed = 0;
    }
    // display value of each button;
    input.value += button_class.value;
  });
});

// solve  the user's input when clicked in equal sign
equal.addEventListener("click", () => {
  equal_pressed = 1;
  let inp_val = input.value;
  try {
    //evaluate user's input
    let solution = eval(inp_val);
    // True for natural number
    // False for decimals
    if (Number.isInteger(solution)) {
      input.value = solution;
    } else {
      input.value = solution.toFixed(3);
    }
  } catch (err) {
    // if user has entered invalid input
    alert("invalid Input");
  }
});

// clear whole Input
clear.addEventListener("click", () => {
  input.value = "";
});

// Erase Single digit

erase.addEventListener("click", () => {
  input.value = input.value.substr(0, input.value.length - 1);
});
