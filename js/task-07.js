const rangeInputRef = document.querySelector("#font-size-control");
const spanTextRef = document.querySelector("#text");

rangeInputRef.addEventListener("change", onRangeInputChange);

function onRangeInputChange(e) {
  const fontSize = e.currentTarget.value;
  spanTextRef.style.fontSize = `${fontSize}px`;
}
