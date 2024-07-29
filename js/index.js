const container = document.createElement('div');
container.className = 'container';

const leftSplit = document.createElement('div');
leftSplit.className = 'split left';

const leftHeading = document.createElement('h1');
leftHeading.textContent = 'Đi trộn hồ';

const leftButton = document.createElement('button');
leftButton.className = 'btn';
leftButton.textContent = 'Đi liền';
leftButton.addEventListener('click', () => {
  alert('Bạn đã chọn đi trộn hồ!');
});

leftSplit.appendChild(leftHeading);
leftSplit.appendChild(leftButton);

const rightSplit = document.createElement('div');
rightSplit.className = 'split right';

const rightHeading = document.createElement('h1');
rightHeading.textContent = 'Đi học';

const rightButton = document.createElement('button');
rightButton.className = 'btn';
rightButton.textContent = 'Đi liền';
rightButton.addEventListener('click', () => {
  alert('Bạn đã chọn đi học, bạn sẽ được trộn hồ!');
});

rightSplit.appendChild(rightHeading);
rightSplit.appendChild(rightButton);

container.appendChild(leftSplit);
container.appendChild(rightSplit);

document.body.appendChild(container);
const leftEl = document.querySelector(".left");
const rightEl = document.querySelector(".right");

leftEl.addEventListener("mouseenter", () => {
  container.classList.add("active-left");
});

leftEl.addEventListener("mouseleave", () => {
  container.classList.remove("active-left");
});

rightEl.addEventListener("mouseenter", () => {
  container.classList.add("active-right");
});

rightEl.addEventListener("mouseleave", () => {
  container.classList.remove("active-right");
});
