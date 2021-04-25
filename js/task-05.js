const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");
const defaultOutput = outputRef.textContent;

inputRef.addEventListener("input", onInput);

function onInput(event) {
  const inputValue = event.currentTarget.value;
  if (inputValue === "") {
    outputRef.textContent = defaultOutput;
  } else {
    outputRef.textContent = inputValue;
  }
}
