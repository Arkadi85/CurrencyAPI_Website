function redirectToUrl() {
  window.location.href = "https://www.google.com";
}

// buttons.js

document.addEventListener("DOMContentLoaded", function () {
  const signupBtn = document.querySelector(".signup-btn");
  const mainContent = document.getElementById("main-content");
  const iframeContainer = document.getElementById("iframe-container");
  const signupIframe = document.getElementById("signup-iframe");

  signupBtn.addEventListener("click", function () {
    mainContent.style.display = "none";
    iframeContainer.style.display = "block";
    signupIframe.src = "https://app1.currencyexchangeconvertor.com";
  });
});

let words = document.querySelectorAll(".word");
words.forEach((word) => {
  let letters = word.textContent.split("");
  word.textContent = "";
  letters.forEach((letter) => {
    let span = document.createElement("span");
    if (letter === " ") {
      span.innerHTML = "&nbsp;"; // Use non-breaking space for spaces
    } else {
      span.textContent = letter;
    }
    span.className = "letter";
    word.append(span);
  });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let rotateText = () => {
  let currentWord = words[currentWordIndex];
  let nextWord =
    currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
  // Rotate out letters of current word
  Array.from(currentWord.children).forEach((letter, i) => {
    setTimeout(() => {
      letter.className = "letter out";
    }, i * 80);
  });
  // Reveal and rotate in letters of next word
  nextWord.style.opacity = "1";
  Array.from(nextWord.children).forEach((letter, i) => {
    letter.className = "letter behind";
    setTimeout(() => {
      letter.className = "letter in";
    }, 340 + i * 80);
  });
  currentWordIndex =
    currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

rotateText();
setInterval(rotateText, 4000);
