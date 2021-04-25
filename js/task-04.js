const counterValueRef = document.querySelector("#value");
let counterValue = Number(counterValueRef.textContent);

const increment = () => {
  counterValue += 1;
};

const decrement = () => {
  counterValue -= 1;
};

const decrementBtnRef = document.querySelector('[data-action="decrement"]');
decrementBtnRef.addEventListener("click", () => {
  decrement();
  counterValueRef.textContent = counterValue;
});

const incrementBtnRef = document.querySelector('[data-action="increment"]');
incrementBtnRef.addEventListener("click", () => {
  increment();
  counterValueRef.textContent = counterValue;
});
