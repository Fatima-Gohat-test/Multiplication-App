// Math.ceil is used to come only single number
const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

//initialize the value of a score

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  score = 0;
}

// grap heading 1
const questionE = document.getElementById("question");
// grap form
const formE = document.getElementById("form");
// grap input
const inputE = document.getElementById("input");

// grap score
const scoreE = document.getElementById("score");

scoreE.innerText = `Score : ${score}`

questionE.innerText = `What is ${num1} multiply by ${num2} ?`;

const correctans = num1 * num2;

//When submit the form activate call back function

formE.addEventListener("submit", () => {
  const userAnswer = +inputE.value;

  if (userAnswer === correctans) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});

// to store score in local Storage
function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
