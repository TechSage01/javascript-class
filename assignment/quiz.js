let quizArr = [
   
  {
    question: "Who is your instructor?",
    options: ["Mr Selim", "Mr Dammy", "Mr Yemi", "Mr Timi"],
    answer: "Mr Dammy",
    chosen: ""
  },
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Makeup Language", "Hyper Text Markup Language", "Home Tool Mark Language", "None"],
    answer: "Hyper Text Markup Language",
    chosen: ""
  },
  {
    question: "What is used for styling webpage?",
    options: ["CSS", "Excel", "Python", "HTML"],
    answer: "CSS",
    chosen: ""
  },
  {
    question: "Who is the president of Nigeria?",
    options: ["Bola Tinubu", "Peter Obi", "Atiku Abubakar", "Buhari Mohammed"],
    answer: "Bola Tinubu",
    chosen: ""
  },
  {
    question: "Who is the owner of X?",
    options: ["Elon Musk", "Mark", "Bill Gates", "Dangote"],
    answer: "Elon Musk",
    chosen: ""
  },
  {
    question: "Who is the owner of Tesla?",
    options: ["Elon Musk", "Mark", "Bill Gates", "Dangote"],
    answer: "Elon Musk",
    chosen: ""
  },
  {
    question: "Who is the owner of Facebook?",
    options: ["Elon Musk", "Mark Zuckerberg", "Bill Gates", "Dangote"],
    answer: "Mark Zuckerberg",
    chosen: ""
  },
  {
    question: "Who is your role model?",
    options: ["Elon Musk", "Mark", "Bill Gates", "Dangote"],
    answer: "Elon Musk",
    chosen: ""
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
    answer: "Leonardo da Vinci",
    chosen: ""
  },
  {
    question: "Which Operating System are you using for coding?",
    options: ["Linux", "MacOS", "Windows", "None"],
    answer: "Windows",
    chosen: ""
  },
  {
    question: "Which laptop are you using to code?",
    options: ["Dell", "HP", "MacBook", "Lenovo"],
    answer: "HP",
    chosen: ""
  },
  {
    question: "What aspect of coding are you learning?",
    options: ["Full Stack Engineering", "Cyber Security", "Data Analysis", "Machine and AI Learning"],
    answer: "Full Stack Engineering",
    chosen: ""
  },
  {
    question: "What aspect of coding do you think you are going for next?",
    options: ["Full Stack Engineering", "Cyber Security", "Machine and AI Learning", "None"],
    answer: "Machine and AI Learning",
    chosen: ""
  },
  {
    question: "What is your best programming language?",
    options: ["React", "JavaScript", "Java", "Python"],
    answer: "JavaScript",
    chosen: ""
  },
  {
    question: "What do you use to style your webpage?",
    options: ["Vanilla CSS", "Tailwind CSS", "Bootstrap", "Material UI"],
    answer: "Tailwind CSS",
    chosen: ""
  },
  {
    question: "What do you use to write your backend code?",
    options: ["Node.js", "Django", "Golang", "Java"],
    answer: "Node.js",
    chosen: ""
  },
  {
    question: "What do you use to write your frontend code?",
    options: ["React.js", "Vue.js", "Angular", "Svelte"],
    answer: "React.js",
    chosen: ""
  },
  {
    question: "What do you use to write your mobile code?",
    options: ["React Native", "Flutter", "Ionic", "Xamarin"],
    answer: "React Native",
    chosen: ""
  },
  {
    question: "What is your favorite database?",
    options: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
    answer: "MySQL",
    chosen: ""
  },
  {
    question: "What is your favorite programming language?",
    options: ["JavaScript", "Python", "Java", "C#"],
    answer: "Python",
    chosen: ""
  },
  {
    question: "What is your favorite code editor?",
    options: ["VS Code", "Sublime Text", "Atom", "WebStorm"],
    answer: "VS Code",
    chosen: ""
  },
  {
    question: "What do you like coding with?",
    options: ["Music", "Silence", "TV", "Friends"],
    answer: "Music",
    chosen: ""
  },
  {
    question: "If you are not coding, what are you doing?",
    options: ["Watching movies", "Playing C.O.D", "Watching ball", "Sleeping"],
    answer: "Sleeping",
    chosen: ""
  },
  {
    question: "Which of these apps do you spend more time on?",
    options: ["LinkedIn", "X", "Instagram", "WhatsApp"],
    answer: "X",
    chosen: ""
  },
  {
    question: "Who is the father of HTML?",
    options: ["Tim Berners-Lee", "Elon Musk", "Bill Gates", "Steve Jobs"],
    answer: "Tim Berners-Lee",
    chosen: ""
  }
];

let currentQuestion = 0;
let selectedAnswers = {};
let correctAnswer = document.getElementById('correctAnswer');
// console.log(correctAnswer);


function showQuestion() {
  let q = quizArr[currentQuestion];
  document.getElementById("questionText").textContent = q.question;
  document.getElementById("para").textContent =
    `Question ${currentQuestion + 1} of ${quizArr.length}`;

  let optionsContainer = document.getElementById("optionsContainer");
  optionsContainer.innerHTML = ""; 
  q.options.forEach((option, index) => {
    optionsContainer.innerHTML += `
      <li class="li">
        <input 
          type="radio" 
          name="answer${currentQuestion}" 
          id="option${index}" 
          value="${option}"
          onclick="selectAnswer('${option}')"
          ${selectedAnswers[currentQuestion] === option ? "checked" : ""}
        >
        <label for="option${index}">${option}</label>
      </li>
    `;
    // console.log(currentQuestion);
    
  });
}

function selectAnswer(option) {
  selectedAnswers[currentQuestion] = option;
}

function next() {
    if (currentQuestion < quizArr.length - 1) {
    currentQuestion++;
    showQuestion();
  }else {
    alert("no more question")
  }
}

function prev() {
   if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion();
  }

}

function submitQuiz() {
   
  if (Object.keys(selectedAnswers).length < quizArr.length) {
    alert("Please answer all the questions before submitting!");
    console.log(selectedAnswers);
    
  }
 else {
    let score = 0;
    quizArr.forEach((q, index) => {
      if (selectedAnswers[index] === q.answer) {
        score++;
      }
    });

    correctAnswer.textContent = ` You got ${score} / ${quizArr.length} correct! `;
    // alert(" Thanks for participating in our quiz competition!");
  }
}

showQuestion(); 