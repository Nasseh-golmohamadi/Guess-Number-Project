const easyOne = document.querySelector("#easy");
const mediumOne = document.querySelector("#medium");
const hardOne = document.querySelector("#hard");
const difficultySection = document.querySelector("#select-difficulty");
const easyLevelSection = document.querySelector(".game");
let h2Chance = document.querySelector(".Chances");
let span = document.querySelector("span");
let pGuide = document.querySelector("p");
let text = document.querySelector("label");
const buttonReset = document.querySelector("button");
const mainSec = document.querySelector("main");
const aButton = document.querySelector("a");
const back = document.querySelector(".back");

let computerGuess;

let reLoad;
easyOne.addEventListener("click", (e) => {
  reLoad = () => {
    span.innerHTML = 16;
    computerGuess = Math.floor(Math.random() * 15) + 1;
    h2Chance.innerHTML = 5;
    document.forms.myForm.style.display = "block";
    console.log(computerGuess);
    mainSec.style.display = "block";
    back.style.display = "block";
  };
  difficultySection.style.display = "none";
  easyLevelSection.style.display = "block";
  computerGuess = Math.floor(Math.random() * 15) + 1;
  mainSec.style.display = "block";
  back.style.display = "block";
  console.log(computerGuess);
});

mediumOne.addEventListener("click", (e) => {
  reLoad = () => {
    span.innerHTML = 16;
    difficultySection.style.display = "none";
    computerGuess = Math.floor(Math.random() * 30) + 1;
    document.forms.myForm.style.display = "block";
    h2Chance.innerHTML = 5;
    mainSec.style.display = "block";
    back.style.display = "block";
    console.log(computerGuess);
  };
  text.innerHTML = `از یک تا 30 حدس بزنید`;
  difficultySection.style.display = "none";
  easyLevelSection.style.display = "block";
  computerGuess = Math.floor(Math.random() * 30) + 1;
  mainSec.style.display = "block";
  back.style.display = "block";
  console.log(computerGuess);
});

hardOne.addEventListener("click", (e) => {
  reLoad = () => {
    span.innerHTML = 16;
    difficultySection.style.display = "none";
    computerGuess = Math.floor(Math.random() * 50) + 1;
    document.forms.myForm.style.display = "block";
    h2Chance.innerHTML = 5;
    mainSec.style.display = "block";
    back.style.display = "block";
    console.log(computerGuess);
  };
  text.innerHTML = `از یک تا 50 حدس بزنید`;
  difficultySection.style.display = "none";
  easyLevelSection.style.display = "block";
  computerGuess = Math.floor(Math.random() * 50) + 1;
  mainSec.style.display = "block";
  back.style.display = "block";

  console.log(computerGuess);
});

let intervalMachine;
aButton.addEventListener("click", () => {
  reLoad();
  mainSec.style.display = "none";
  intervalMachine = setInterval(() => {
    let corno = +span.innerText;
    span.innerText = corno - 1;
    if (corno <= 1) {
      clearInterval(intervalMachine);
      reLoad();
    }
  }, 1000);
});

back.addEventListener("click", () => {
  span.innerHTML = 14;
  clearInterval(intervalMachine);
  difficultySection.style.display = "block";
  easyLevelSection.style.display = "none";
});

document.forms.myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let userGuess = e.target.elements.guessInput.value;

  handleIf(computerGuess, userGuess);
  e.target.elements.guessInput.value = "";
});

function handleIf(computerGuess, userGuess) {
  if (+userGuess == "") {
    alert(`لطفا عدد مورد نظر را انتخاب کنید`);
  }
  if (computerGuess > +userGuess) {
    h2Chance.innerHTML = h2Chance.innerHTML - 1;
    pGuide.innerHTML = `کمه حاجی بروبالا`;
  }

  if (computerGuess === +userGuess) {
    pGuide.innerHTML = `باریکلا عدد ${computerGuess} هستش`;
    document.forms.myForm.style.display = "none";
    h2Chance.innerHTML = h2Chance.innerHTML - 1;
    clearInterval(intervalMachine);
  }

  if (computerGuess < +userGuess) {
    h2Chance.innerHTML = h2Chance.innerHTML - 1;
    pGuide.innerHTML = `زیاد میگی`;
  }

  if (Number(h2Chance.innerHTML) === 0) {
    pGuide.innerHTML = `شانس شما به اتمام رسید عدد ${computerGuess} بود`;
    clearInterval(intervalMachine);
  }

  if (Number(h2Chance.innerHTML) < 0) {
    pGuide.innerHTML = `شانس شما به اتمام رسید عدد ${computerGuess} بود`;
    document.forms.myForm.style.display = "none";
    clearInterval(intervalMachine);
  }
}

buttonReset.onclick = () => {
  reLoad();
  clearInterval(intervalMachine);
};
