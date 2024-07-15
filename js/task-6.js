function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const box = document.querySelector("boxes");

const createBoxes = (amount) => {
  const boxesContainer = document.getElementById("boxes");
  boxesContainer.innerHTML = "";

  const boxesHtml = Array.from({ length: amount }, (_, i) => {
    const size = 30 + i * 10;
    return `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};"></div>`;
  }).join("");

  boxesContainer.innerHTML = boxesHtml;
};
function destroyBoxes() {
  boxes.innerHTML = "";
}

createButton.addEventListener("click", () => {
  const amount = parseInt(input.value);
  if (amount < 1);
  else if (amount >= 100);
  else {
    createBoxes(amount);
    input.value = "";
  }
});
destroyButton.addEventListener("click", destroyBoxes);
