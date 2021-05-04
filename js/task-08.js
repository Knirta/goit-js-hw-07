const refs = {
  input: document.querySelector("#controls input"),
  renderBtn: document.querySelector('[data-action = "render"]'),
  destroyBtn: document.querySelector('[data-action = "destroy"]'),
  container: document.querySelector("#boxes"),
};

refs.renderBtn.addEventListener("click", onRenderBtnClick);
refs.destroyBtn.addEventListener("click", onDestroyBtnClick);

function onRenderBtnClick(e) {
  const boxesAmount = refs.input.value;
  createBoxes(boxesAmount);
}

function onDestroyBtnClick() {
  destroyBoxes();
}

function createBoxes(amount) {
  const divsRef = [];
  const initialWidth = 30;
  const initialHeight = 30;
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    div.className = "inner-box";
    div.textContent = i + 1;

    div.style.width = `${initialWidth + i * 10}px`;
    div.style.height = `${initialHeight + i * 10}px`;

    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);
    div.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

    divsRef.push(div);
  }
  refs.container.append(...divsRef);
}

function destroyBoxes() {
  refs.container.innerHTML = "";
}
