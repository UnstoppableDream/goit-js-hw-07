const liItems = document.querySelectorAll("#categories > .item");

console.log(`Number of categories: ${liItems.length}`);

liItems.forEach((item) => {
  const categoryName = item.querySelector("h2").textContent;
  const categoryItems = item.querySelectorAll("ul > li");
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryItems.length}`);
});
