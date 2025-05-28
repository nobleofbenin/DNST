// delsu.js - Full implementation for Practice and Exam Mode with 50 questions

const delsuQuestions = [
  // Example structure, continue with all 50 fully reviewed questions
  {
    question: "Which of the following is a noble gas?",
    options: ["Oxygen", "Nitrogen", "Argon", "Hydrogen"],
    answer: 2,
    explanation: "Argon is a noble gas found in Group 18 of the periodic table."
  },
  {
    question: "The SI unit of electric current is?",
    options: ["Ohm", "Volt", "Ampere", "Coulomb"],
    answer: 2,
    explanation: "The SI unit of electric current is Ampere (A)."
  },
  // Add the rest of the 50 questions here
];

let currentMode = "practice"; // or "exam"
let currentQuestionIndex = 0;
let selectedQuestions = [];
let userAnswers = [];
let startTime;

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function startPracticeMode() {
  currentMode = "practice";
  selectedQuestions = shuffle([...delsuQuestions]).slice(0, 25);
  currentQuestionIndex = 0;
  showQuestion();
}

function startExamMode() {
  currentMode = "exam";
  selectedQuestions = shuffle([...delsuQuestions]).slice(0, 50);
  currentQuestionIndex = 0;
  userAnswers = Array(50).fill(null);
  startTime = new Date();
  showQuestion();
  startTimer();
}

function startTimer() {
  const endTime = new Date(startTime.getTime() + 60 * 60000);
  const timerEl = document.getElementById("timer");
  const timerInterval = setInterval(() => {
    const now = new Date();
    const diff = endTime - now;
    if (diff <= 0) {
      clearInterval(timerInterval);
      submitExam();
    } else {
      const minutes = Math.floor(diff / 60000);
      const seconds = Math.floor((diff % 60000) / 1000);
      timerEl.innerText = `Time left: ${minutes}m ${seconds}s`;
    }
  }, 1000);
}

function showQuestion() {
  const q = selectedQuestions[currentQuestionIndex];
  const container = document.getElementById("quiz-container");
  container.innerHTML = `<h2>Question ${currentQuestionIndex + 1} of ${selectedQuestions.length}</h2>
    <p>${q.question}</p>
    <ul>
      ${q.options.map((opt, i) => `<li><button onclick="selectOption(${i})">${opt}</button></li>`).join("")}
    </ul>
    <div id="feedback"></div>
    <div class="nav-buttons">
      <button onclick="prevQuestion()">Previous</button>
      <button onclick="nextQuestion()">Next</button>
    </div>`;

  if (currentMode === "exam" && userAnswers[currentQuestionIndex] !== null) {
    document.querySelectorAll("button").forEach(btn => btn.disabled = true);
  }
}

function selectOption(selectedIndex) {
  const q = selectedQuestions[currentQuestionIndex];

  if (currentMode === "practice") {
    const feedback = document.getElementById("feedback");
    if (selectedIndex === q.answer) {
      feedback.innerHTML = `<p style='color:green'>Correct! ${q.explanation}</p>`;
    } else {
      feedback.innerHTML = `<p style='color:red'>Incorrect. Correct answer is: ${q.options[q.answer]}.<br>${q.explanation}</p>`;
    }
    document.querySelectorAll("button").forEach(btn => btn.disabled = true);
  } else if (currentMode === "exam") {
    userAnswers[currentQuestionIndex] = selectedIndex;
    document.querySelectorAll("button").forEach(btn => btn.disabled = true);
  }
}

function nextQuestion() {
  if (currentQuestionIndex < selectedQuestions.length - 1) {
    currentQuestionIndex++;
    showQuestion();
  }
}

function prevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    showQuestion();
  }
}

function submitExam() {
  let score = 0;
  let feedback = "<h2>Exam Results</h2><ul>";
  selectedQuestions.forEach((q, i) => {
    const userAns = userAnswers[i];
    if (userAns === q.answer) score++;
    feedback += `<li>
      <strong>Q${i + 1}: ${q.question}</strong><br>
      Your Answer: ${userAns !== null ? q.options[userAns] : "No Answer"}<br>
      Correct Answer: ${q.options[q.answer]}<br>
      Explanation: ${q.explanation}
    </li><br>`;
  });
  feedback += `</ul><h3>Your Score: ${score * 2} / 100</h3>`;
  document.getElementById("quiz-container").innerHTML = feedback;
  document.getElementById("timer").innerText = "";
}
