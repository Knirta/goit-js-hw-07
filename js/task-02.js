const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsLiRef = ingredients.map((ingredient) => {
  const liRef = document.createElement("li");
  liRef.textContent = ingredient;
  return liRef;
});

const ingredientsUlRef = document.querySelector("#ingredients");
ingredientsUlRef.append(...ingredientsLiRef);
