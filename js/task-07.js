const rangeInputRef = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

rangeInputRef.addEventListener("change", onRangeInputChange);

function onRangeInputChange(e) {
  const fontSize = e.currentTarget.value;
  console.log(spanText);
  spanText.style.fontSize = `${fontSize}px`;
}
