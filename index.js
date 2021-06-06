const quizData = [
  {
    question: "which lang runs in a browser?",
    a: "java",
    b: "c",
    c: "javascript",
    d: "pyhton",
    correct: "c",
  },
  {
    question: "what does css stand for?",
    a: "central style sheet",
    b: "cascading style sheet",
    c: "cascading simple sheets",
    d: "cars suv sailbots",
    correct: "b",
  },
  {
    question: "what does html stand for?",
    a: "hypertext markup language",
    b: "cascading style sheet",
    c: "cascading simple sheets",
    d: "cars suv sailbots",
    correct: "a",
  },
  {
    question: "what year was js launched?",
    a: "1999",
    b: "1995",
    c: "1990",
    d: "1991",
    correct: "b",
  },
];

const quiz = document.querySelector("#quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let score = 0;
let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerHTML = currentQuizData.question;

  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;

  deselectAnswers();
}

function deselectAnswers() {
  answerEls.forEach((el) => (el.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
      <h2 class="quiz-box-header">You answered ${score}/${quizData.length} questions correctly.</h2>
      <button id= "submit" onclick = "location.reload()">Reload</button>


    `;
    }
  }
});
