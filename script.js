"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");

const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "Anh yêu em nhiều lắm, Anh hứa không bao giờ làm em buồn nữa đâu :3";
  buttonsContainer.classList.add("hidden");
  changeImage(6); // Hiển thị hình ảnh "yes"
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "Không Bao Giờ",
    "Anh biết lỗi rồi ạ",
    "Mong em tha lỗi cho anh :((",
    "Anh sai rồi, anh thật đáng trách ạ",
    "Em đừng giận anh nữa nhé",
    "Anh yêu em nhiều lắm ",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(imageIndex) {
  const imageSources = [
    "cat-0.jpg",  // Thêm cat-0.jpg vào đây
    "cat-1.jpg",
    "cat-2.jpg",
    "cat-3.jpg",
    "cat-4.jpg",
    "cat-5.jpg",
    "cat-yes.jpg"
  ];

  if (imageIndex < 0 || imageIndex >= imageSources.length) {
    console.error("Invalid image index");
    return;
  }

  document.querySelector(".cat-img").src = imageSources[imageIndex];
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}
