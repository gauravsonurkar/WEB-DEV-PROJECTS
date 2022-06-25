const form = document.getElementById("form");
const submitBtn = document.getElementById("btn");
const degreesInput = document.getElementById("degrees-input");
const degreesSelect = document.getElementById("degrees-select");
const output = document.getElementById("output");

form.addEventListener("submit", (event) => {
  event.preventDefault();
});

const convertTemperature = () => {
  let result;
  let inputValue = degreesInput.value;
  let selectedValue = degreesSelect.value;

  if (selectedValue === "fahrenheit") {
    result = parseFloat((((inputValue - 32) * 5) / 9).toFixed(2));
    output.innerHTML = `${inputValue} &#8457; = ${result} &#8451;`;
    form.reset();
  } else if (selectedValue === "celsius") {
    result = parseFloat(((inputValue * 9) / 5 + 32).toFixed(2));
    output.innerHTML = `${inputValue} &#8451; = ${result} &#8457;`;

    form.reset();
  }
};

document.addEventListener("DOMContentLoaded", () => {
  btn.addEventListener("click", convertTemperature);
});
