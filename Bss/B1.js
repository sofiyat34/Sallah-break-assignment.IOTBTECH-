JavaScript

// ===============================
// QUESTIONS
// ===============================
const questions = [
    {
        q: "What does JS stand for?",
        options: ["Java Source", "JavaScript", "Just Script", "JSON Script"],
        answer: 1
    },
    {
        q: "Which company created JavaScript?",
        options: ["Microsoft", "Netscape", "Google", "Apple"],
        answer: 1
    },
    {
        q: "Which keyword declares a constant?",
        options: ["var", "let", "const", "define"],
        answer: 2
    },
    {
        q: "What is 2 + '2' in JS?",
        options: ["4", "22", "NaN", "Error"],
        answer: 1
    },
    {
        q: "Which method converts JSON to object?",
        options: ["JSON.parse()", "JSON.stringify()", "parse.JSON()", "convert()"],
        answer: 0
    },
    {
        q: "Which is NOT a JS data type?",
        options: ["String", "Number", "Boolean", "Character"],
        answer: 3
    },
    {
        q: "What does DOM stand for?",
        options: ["Document Object Model", "Data Object Model", "Digital Output Model", "None"],
        answer: 0
    },
    {
        q: "Which symbol is used for comments?",
        options: ["<!-- -->", "//", "#", "**"],
        answer: 1
    },
    {
        q: "Which function prints to console?",
        options: ["log()", "print()", "console.log()", "echo()"],
        answer: 2
    },
    {
        q: "Which loop runs at least once?",
        options: ["for", "while", "do...while", "foreach"],
        answer: 2
    }
];

// ===============================
// STATE
// ===============================
let current = 0;
let score = 0;
let review = [];
let selected = null;
let time = 10;
let timer;

// ===============================
// LOAD QUESTION
// ===============================
function loadQuestion() {
    clearInterval(timer);
    time = 10;

    const q = questions[current];

    document.getElementById("question").textContent =
        `${current + 1}. ${q.q}`;

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    q.options.forEach((opt, index) => {
        const div = document.createElement("div");
        div.classList.add("option");
        div.textContent = opt;

        div.onclick = () => {
            selected = index;
            highlightSelected();
        };

        optionsDiv.appendChild(div);
    });

    updateProgress();
    startTimer();
}

// ===============================
// SELECT OPTION
// ===============================
function highlightSelected() {
    const options = document.querySelectorAll(".option");

    options.forEach((opt, i) => {
        opt.style.background = i === selected ? "#ccc" : "#eee";
    });
}

// ===============================
// NEXT QUESTION
// ===============================
function nextQuestion() {
    const q = questions[current];

    const isCorrect = selected === q.answer;

    if (isCorrect) score++;

    review.push({
        question: q.q,
        selected: q.options[selected] || "No Answer",
        correct: q.options[q.answer],
        isCorrect
    });

    current++;
    selected = null;

    if (current < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

// ===============================
// PROGRESS BAR
// ===============================
function updateProgress() {
    const percent = (current / questions.length) * 100;
    document.getElementById("progressBar").style.width = percent + "%";
}

// ===============================
// TIMER (10 seconds per question)
// ===============================
function startTimer() {
    document.getElementById("timer").textContent = "Time: 10s";

    timer = setInterval(() => {
        time--;

        document.getElementById("timer").textContent =
            `Time: ${time}s`;

        if (time === 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

// ===============================
// RESULT PAGE
// ===============================
function showResult() {
    document.getElementById("quiz").innerHTML = "";
    document.querySelector("button").style.display = "none";

    document.getElementById("score").textContent =
        `Your Score: ${score} / ${questions.length}`;

    let best = localStorage.getItem("bestScore") || 0;

    if (score > best) {
        localStorage.setItem("bestScore", score);
        best = score;
    }

    document.getElementById("bestScore").textContent =
        `Best Score: ${best}`;

    const reviewDiv = document.getElementById("review");
    reviewDiv.innerHTML = "<h3>Review:</h3>";

    review.forEach((r, i) => {
        const div = document.createElement("div");
        div.classList.add("review");

        div.innerHTML = `
            <b>Q${i + 1}:</b> ${r.question}<br>
            Your Answer: <span class="${r.isCorrect ? 'correct' : 'wrong'}">
            ${r.selected}</span><br>
            Correct Answer: ${r.correct}
            <hr>
        `;

        reviewDiv.appendChild(div);
    });
}

// ===============================
// INIT
// ===============================
loadQuestion();