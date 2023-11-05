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
let countdown = 10;
let counter;
let slctQuestion = 0;
let datta =[]

function timer() {
  counter = setInterval(() => {
    countdown--;
    countdownDisplay.innerHTML = `${countdown}s`;
    if (countdown == 0) {
      countdown = 10;
      clearInterval(counter);
      setTimeout(() => {
        if (slctQuestion >= questionData.length) {
          finishGame();
          slctQuestion = 0;
          return;
        }
        countdownDisplay.innerHTML = `${10}s`;
        questionView(questionHierarchy[slctQuestion], questionShuffle(0, 3));
        ResultdataCreator();
        optionUpdate();
        slctQuestion++;
        timer();
      }, 1000);
    }
  }, 1000);
}

function ResultdataCreator() {
  activeQuestion = questionHierarchy[slctQuestion];
  datta.push({questionId: questionData[activeQuestion].id, answer: questionData[activeQuestion].correct, userAnswer: userAnswer});
  console.log(datta);
  userAnswer = "";
}

function finishGame() {
  clearInterval(counter);
  questionDisplay.innerHTML =
    '<div style="margin-top:25px;margin-bottom:25px;font-size:20px;" class="question">Oyunu Tamamladın. Skor tablosundan sonucunu görebilirsin 😎 <br />( sonuçlar console da )</div>';
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
      <button data-id="${questionData[ID].id}" data-option="${questionData[ID].options[answers[0]]}" class="option">${questionData[ID].options[answers[0]]}</button>
      <button data-id="${questionData[ID].id}" data-option="${questionData[ID].options[answers[1]]}" class="option">${questionData[ID].options[answers[1]]}</button>
      <button data-id="${questionData[ID].id}" data-option="${questionData[ID].options[answers[2]]}" class="option">${questionData[ID].options[answers[2]]}</button>
      <button data-id="${questionData[ID].id}" data-option="${questionData[ID].options[answers[3]]}" class="option">${questionData[ID].options[answers[3]]}</button>
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
      const questionId = button.getAttribute("data-id");
      selectRemove();
      button.style.backgroundColor = "#c0bfd2";
      userAnswer = answer;
      console.log(questionId);
    });
  });
}

nextQuestionButton.addEventListener("click", () => {
  if (slctQuestion >= questionData.length) {
    finishGame();
    slctQuestion = 0;
    return;
  }
  questionView(questionHierarchy[slctQuestion], questionShuffle(0, 3));
  clearInterval(counter);
  ResultdataCreator("next");
  optionUpdate();
  countdown = 10;
  countdownDisplay.innerHTML = `${10}s`;
  slctQuestion++;
  timer();
});

startButton.addEventListener("click", () => {
  // document.querySelector(".question-bar").style.display = "block";
  document.querySelector(".next-question").style.display = "inline-block";
  document.querySelector(".quiz-status-bar").style.display = "flex";
  document.querySelector(".start-panel").style.display = "none";
  questionView(questionHierarchy[slctQuestion], questionShuffle(0, 3));
  ResultdataCreator("start");
  optionUpdate();
  slctQuestion++;
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
