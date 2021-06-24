let questions = [
  {
    question: "Who is known as the Flying Sikh?",
    options: ["Milkha Singh", "Akshay Kumar", "Abhinav Bindra", "PT Usha"],
    answer: "0",
  },
  {
    question: "On whoose birthday do we celebrate Engineers Day?",
    options: ["CV Raman", "M visvesvaraya", "JRD Tata", "E Sreedharan"],
    answer: "1",
  },
  {
    question: "Which Indian State has the largest population?",
    options: ["Rajasthan", "Maharashtra", "Uttar Pradesh", "Himachal Pradesh"],
    answer: "2",
  },
];

let currentQuestion = 0;

questions.sort(() => 0.5 - Math.random());

function addQuestion(number) {
  let questionDiv = document.getElementById("question");
  questionDiv.innerText = questions[number].question;
  currentQuestion = number;
  addOptions(number);
}
function addOptions(number) {
  let optionButtons = document.getElementsByClassName("option");
  for (let i = 0; i < 4; i++) {
    optionButtons[i].innerText = questions[number].options[i];
    optionButtons[i].addEventListener("click", check);
  }
  optionButtons[questions[number].answer].classList.add("sahi");
}

function check(e) {
  let optionButtons = document.getElementsByClassName("option");
  if (e.target.classList.length == 2) {
    e.target.classList.add("correct");
    for (let i = 0; i < 4; i++) {
      optionButtons[i].removeEventListener("click", check);
    }
    setTimeout(() => {
      addQuestion(currentQuestion + 1);
      e.target.className = "option";
    }, 3000);
  } else {
    e.target.classList.add("wrong");
    for (let i = 0; i < 4; i++) {
      optionButtons[i].removeEventListener("click", check);
    }
    setTimeout(() => {
      addQuestion(currentQuestion + 1);
      e.target.classList.remove("wrong");
    }, 3000);
  }
}

addQuestion(0);
