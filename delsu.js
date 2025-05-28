const delsuQuestions = [
  {
    question: "Which of the following is a noble gas?",
    options: ["Oxygen", "Hydrogen", "Helium", "Nitrogen"],
    answer: 2,
    explanation: "Helium is a noble gas due to its full outer electron shell."
  },
  {
    question: "The acceleration due to gravity on Earth is approximately?",
    options: ["9.8 m/s²", "10 m/s", "1.8 m/s²", "98 m/s²"],
    answer: 0,
    explanation: "The standard acceleration due to gravity is 9.8 m/s²."
  },
  // Add more questions here following the same format
];

let mode = ''; // "practice" or "exam"
let currentIndex = 0;
let selectedAnswers = [];
let startTime;
let examQuestions = [];
let practiceQuestions = [];

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function startPracticeMode() {
  mode = "practice";
  practiceQuestions = shuffleArray([...delsuQuestions]).slice(0, 25);
  currentIndex = 0;
  showQuestion();
}

function startExamMode() {
  mode = "exam";
  examQuestions = shuffleArray([...delsuQuestions]).slice(0, 50);
  currentIndex = 0;
  selectedAnswers = new Array(50).fill(null);
  startTime = Date.now();
  showQuestion();
  startTimer();
}

function startTimer() {
  const timerElement = document.getElementById("timer");
  const interval = setInterval(() => {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const remaining = 3600 - elapsed;
    if (remaining <= 0) {
      clearInterval(interval);
      showExamResult();
    } else {
      const mins = Math.floor(remaining / 60);
      const secs = remaining % 60;
      timerElement.textContent = `Time Left: ${mins}m ${secs}s`;
    }
  }, 1000);
}

function showQuestion() {
  const qContainer = document.getElementById("quiz-container");
  const questionList = mode === "practice" ? practiceQuestions : examQuestions;
  const qData = questionList[currentIndex];

  let html = `<h3>Question ${currentIndex + 1}:</h3>`;
  html += `<p>${qData.question}</p>`;

  qData.options.forEach((opt, i) => {
    const id = `opt-${i}`;
    const checked = selectedAnswers[currentIndex] === i ? "checked" : "";
    html += `<label><input type="radio" name="option" value="${i}" ${checked} onchange="selectOption(${i})"> ${opt}</label><br>`;
  });

  if (mode === "practice" && selectedAnswers[currentIndex] !== undefined) {
    const selected = selectedAnswers[currentIndex];
    const isCorrect = selected === qData.answer;
    html += `<p style="color:${isCorrect ? 'green' : 'red'};">${isCorrect ? 'Correct!' : 'Wrong!'}</p>`;
    html += `<p><strong>Explanation:</strong> ${qData.explanation}</p>`;
  }

  html += `<button onclick="prevQuestion()">Previous</button>`;
  html += `<button onclick="nextQuestion()">Next</button>`;
  if (mode === "exam" && currentIndex === 49) {
    html += `<br><br><button onclick="showExamResult()">Submit Exam</button>`;
  }

  qContainer.innerHTML = html;
}

function selectOption(option) {
  selectedAnswers[currentIndex] = option;
  if (mode === "practice") showQuestion();
}

function prevQuestion() {
  if (currentIndex > 0) {
    currentIndex--;
    showQuestion();
  }
}

function nextQuestion() {
  const limit = mode === "practice" ? 25 : 50;
  if (currentIndex < limit - 1) {
    currentIndex++;
    showQuestion();
  }
}

function showExamResult() {
  let score = 0;
  examQuestions.forEach((q, i) => {
    if (selectedAnswers[i] === q.answer) score++;
  });

  const resultHTML = `
    <h3>Your Score: ${score * 2} / 100</h3>
    ${examQuestions.map((q, i) => `
      <p><strong>Q${i + 1}:</strong> ${q.question}</p>
      <p>Your Answer: ${q.options[selectedAnswers[i]] || 'None selected'}</p>
      <p>Correct Answer: ${q.options[q.answer]}</p>
      <p><strong>Explanation:</strong> ${q.explanation}</p>
      <hr>
    `).join('')}
  `;

  document.getElementById("quiz-container").innerHTML = resultHTML;
  document.getElementById("timer").textContent = '';
}
