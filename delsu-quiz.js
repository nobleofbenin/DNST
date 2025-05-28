<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>DNST DELSU Practice</title>
  <style>
    body { font-family: Arial, sans-serif; background-color: #f2fff2; color: #333; }
    .container { max-width: 800px; margin: auto; padding: 20px; }
    h1 { color: green; text-align: center; }
    .question-card { background: white; padding: 20px; border-radius: 12px; margin-bottom: 20px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
    .question { font-weight: bold; }
    .options { list-style: none; padding: 0; }
    .options li { margin-bottom: 10px; }
    .options li button { width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 6px; background: #fff; cursor: pointer; }
    .options li button.correct { background-color: #c8f7c5; }
    .options li button.wrong { background-color: #f7c5c5; }
    .explanation { margin-top: 10px; padding: 10px; background: #e6ffe6; border-left: 5px solid green; display: none; }
    .nav-buttons { display: flex; justify-content: space-between; margin-top: 20px; }
    .nav-buttons button { padding: 10px 20px; background: yellowgreen; color: white; border: none; border-radius: 6px; cursor: pointer; }
  </style>
</head>
<body>
  <div class="container">
    <h1>DNST DELSU POST UTME PRACTICE</h1>
    <div id="quiz-container"></div>
    <div class="nav-buttons">
      <button id="prev-btn">Previous</button>
      <button id="next-btn">Next</button>
    </div>
  </div>

  <script>
    const questions = [
      {
        question: "Army is to recruit as religion is to _______",
        options: ["Convert", "Worshiper", "Baptize", "Love"],
        correctAnswer: 0,
        explanation: "Just as an army recruits new soldiers, religion seeks to convert new followers."
      },
      {
        question: "Find the highest common factor of 234, 216, and 270",
        options: ["18", "20", "21", "27"],
        correctAnswer: 0,
        explanation: "The HCF of 234, 216, and 270 is 18, which is the greatest number that divides all of them without remainder."
      },
      // Add 23 more questions here for Practice Mode...
    ];

    let currentQuestion = 0;
    let usedIndices = [...Array(questions.length).keys()].sort(() => Math.random() - 0.5).slice(0, 25);

    function showQuestion(index) {
      const qIndex = usedIndices[index];
      const q = questions[qIndex];
      const container = document.getElementById("quiz-container");

      container.innerHTML = `
        <div class="question-card">
          <div class="question">${index + 1}. ${q.question}</div>
          <ul class="options">
            ${q.options.map((opt, i) => `<li><button onclick="selectOption(this, ${q.correctAnswer}, ${i}, '${q.explanation.replace(/'/g, "\'")}')">${opt}</button></li>`).join('')}
          </ul>
          <div class="explanation" id="explanation"></div>
        </div>
      `;
    }

    function selectOption(btn, correctIdx, chosenIdx, explanation) {
      const buttons = btn.parentElement.parentElement.querySelectorAll("button");
      buttons.forEach((b, i) => {
        b.disabled = true;
        b.classList.add(i === correctIdx ? "correct" : (i === chosenIdx ? "wrong" : ""));
      });
      document.getElementById("explanation").style.display = "block";
      document.getElementById("explanation").innerText = explanation;
    }

    document.getElementById("next-btn").onclick = () => {
      if (currentQuestion < usedIndices.length - 1) {
        currentQuestion++;
        showQuestion(currentQuestion);
      }
    };
    document.getElementById("prev-btn").onclick = () => {
      if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion(currentQuestion);
      }
    };

    showQuestion(currentQuestion);
  </script>
</body>
</html>
