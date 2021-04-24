const categoriesRef = document.querySelectorAll("li.item");
console.log(`В списке ${categoriesRef.length} категории`);
[...categoriesRef].map((categoryRef) => {
  const categoryTitle = categoryRef.querySelector("h2").textContent;
  const categoryItemsRef = categoryRef.querySelectorAll("li");
  console.log(
    `Категория: ${categoryTitle} \nКоличество элементов: ${categoryItemsRef.length}`
  );
});
