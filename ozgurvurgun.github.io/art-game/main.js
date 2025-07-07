let countdownDisplay = document.querySelector(".countdown");
let questionDisplay = document.querySelector(".question-bar");
let startButton = document.querySelector(".start-button");
let nextQuestionButton = document.querySelector(".next-question");
let counterStatusDispley = document.querySelector(".left-status-bar");
let optionsButton;
let userAnswer;
let activeQuestion;
let questionData = [];
let questionHierarchy = [];
let answerHierarchy = [];
let realCountdown = 15;
let tempCountdown = realCountdown;
let counter;
let slctQuestion = 0;
let report = [];

function timer() {
  if (tempCountdown == realCountdown) {
    questionView(questionHierarchy[slctQuestion], questionShuffle(0, 3));
    optionUpdate();
  }
  counter = setInterval(() => {
    tempCountdown--;
    countdownDisplay.innerHTML = `${tempCountdown}s`;
    if (tempCountdown == -1) {
      tempCountdown = realCountdown;
      clearInterval(counter);
      ResultdataCreator();
      slctQuestion++;
      if (slctQuestion != questionData.length) {
        countdownDisplay.innerHTML = `${realCountdown}s`;
      }
      if (slctQuestion == questionData.length) {
        finishGame();
        countdownDisplay.innerHTML = `${0}s`;
        return;
      }
      timer();
    }
  }, 1000);
}

function ResultdataCreator() {
  activeQuestion = questionHierarchy[slctQuestion];
  report.push({
    questionId: questionData[activeQuestion].id,
    answer: questionData[activeQuestion].correct,
    userAnswer: userAnswer,
  });
  userAnswer = "";
}

function finishGame() {
  clearInterval(counter);
  let successRate = 0;
  report.forEach((element) => {
    if (element.answer == element.userAnswer) {
      successRate++;
    }
  });
  questionDisplay.innerHTML = `<div style="margin-top:25px;margin-bottom:25px;font-size:20px;" class="question">Sonuçların aşağıda 😎<br />${questionData.length} soru dan, <span style="color:green;" >${successRate}</span> tanesini doğru cevapladın.</div>`;
  document.querySelector(".next-question").style.display = "none";
}

(async function getData() {
  const RESPONSE = await fetch("data/question.json");
  questionData = await RESPONSE.json();
  questionHierarchy = questionShuffle(0, questionData.length - 1);
})();

function questionView(ID, answers) {
  questionDisplay.innerHTML = `
    <div class="question">
      ${questionData[ID].question}
    </div>
    <div class="answers">
      <button data-option="${
        questionData[ID].options[answers[0]]
      }" class="option">${questionData[ID].options[answers[0]]}</button>
      <button data-option="${
        questionData[ID].options[answers[1]]
      }" class="option">${questionData[ID].options[answers[1]]}</button>
      <button data-option="${
        questionData[ID].options[answers[2]]
      }" class="option">${questionData[ID].options[answers[2]]}</button>
      <button data-option="${
        questionData[ID].options[answers[3]]
      }" class="option">${questionData[ID].options[answers[3]]}</button>
    </div>
    `;
  counterStatusDispley.innerHTML = `${slctQuestion + 1} of ${
    questionData.length
  } question`;
}

function questionShuffle(min, max) {
  let numbers = [];
  for (let i = min; i <= max; i++) {
    numbers.push(i);
  }
  // Fisher-Yates algorithm
  for (let i = numbers.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = numbers[i];
    numbers[i] = numbers[j];
    numbers[j] = temp;
  }
  return numbers;
}

function selectRemove() {
  optionsButton.forEach((button) => {
    button.style.backgroundColor = "#fff";
  });
}

function optionUpdate() {
  optionsButton = document.querySelectorAll(".option");
  optionsButton.forEach((button) => {
    button.addEventListener("click", function () {
      const answer = button.getAttribute("data-option");
      selectRemove();
      button.style.backgroundColor = "#c0bfd2";
      userAnswer = answer;
    });
  });
}

nextQuestionButton.addEventListener("click", () => {
  questionView(questionHierarchy[slctQuestion], questionShuffle(0, 3));
  ResultdataCreator();
  optionUpdate();
  tempCountdown = realCountdown;
  slctQuestion++;
  if (slctQuestion != questionData.length) {
    countdownDisplay.innerHTML = `${realCountdown}s`;
  }
  if (slctQuestion == questionData.length) {
    finishGame();
    return;
  }
  clearInterval(counter);
  timer();
});

startButton.addEventListener("click", () => {
  document.querySelector(".countdown").innerHTML = realCountdown + "s";
  document.querySelector(".next-question").style.display = "inline-block";
  document.querySelector(".quiz-status-bar").style.display = "flex";
  document.querySelector(".start-panel").style.display = "none";
  timer();
});

//! responsive navbar calculate start
document.addEventListener("DOMContentLoaded", () => {
  let pageHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );
  document.querySelector(".nav-right").style.height = pageHeight - 100 + "px";
});
//! responsive navbar calculate end
// document.addEventListener("contextmenu", function (e) {
//   e.preventDefault(); // Sağ tıklama olayını engelle
// });
