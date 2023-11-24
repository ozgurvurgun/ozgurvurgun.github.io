function questionView(ID, answers) {
  questionDisplay.innerHTML = `
    <div class="question">
      ${questionData[ID].question}
    </div>
    <div class="answers">
      <button data-id="${questionData[ID].correct}" class="option">${questionData[ID].options[answers[0]]}</button>
      <button data-id="${questionData[ID].correct}" class="option">${questionData[ID].options[answers[1]]}</button>
      <button data-id="${questionData[ID].correct}" class="option">${questionData[ID].options[answers[2]]}</button>
      <button data-id="${questionData[ID].correct}" class="option">${questionData[ID].options[answers[3]]}</button>
    </div>
    `;
  counterStatusDispley.innerHTML = `${slctQuestion + 1} of ${
    questionData.length
  } question`;
}
