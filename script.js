// ========================================
// PLAYER 3: PHISHING QUESTION DATA
// ========================================

const questions = [
    {
        sender: "IT-Support@utsa-security.net",
        subject: "URGENT: Your Account Will Be Suspended",
        message: "We detected unusual activity on your account. Verify your information immediately to prevent your account from being suspended.",
        link: "http://utsa-accountverify.net/login",
        correctAnswer: "phishing",
        explanation: "This is phishing. The sender is using an unofficial domain, the message creates urgency, and the link does not lead to an official UTSA website."
    },

    {
        sender: "no-reply@utsa.edu",
        subject: "Scheduled Canvas Maintenance",
        message: "Canvas will undergo scheduled maintenance this Saturday from 2:00 AM to 4:00 AM. No action is required.",
        link: "",
        correctAnswer: "safe",
        explanation: "This message is likely legitimate. It comes from an official university domain, does not ask for personal information, and does not pressure the recipient to take immediate action."
    },

    {
        sender: "delivery@usps-redelivery-support.net",
        subject: "Package Delivery Failed",
        message: "Your package could not be delivered. Please pay a $1.49 redelivery fee to schedule another delivery attempt.",
        link: "http://usps-redelivery-support.net/payment",
        correctAnswer: "phishing",
        explanation: "This is phishing. The domain is not an official USPS domain, and the message attempts to convince the victim to enter payment information."
    },

    {
        sender: "hiring.manager.jobs@gmail.com",
        subject: "Congratulations! $500/Week Remote Position",
        message: "You have been selected for a remote assistant position. Reply with your full name, phone number, address, and banking information to begin.",
        link: "",
        correctAnswer: "phishing",
        explanation: "This is phishing. The unsolicited job offer promises unusually high pay and immediately asks for sensitive personal and financial information."
    },

    {
        sender: "recruiting@company.com",
        subject: "Interview Confirmation",
        message: "Thank you for applying for our internship program. Your interview has been scheduled through our official recruiting portal.",
        link: "https://careers.company.com",
        correctAnswer: "safe",
        explanation: "This appears legitimate. The sender uses the organization's domain, the message refers to an existing application, and it directs the user to the official company career site."
    },

    {
        sender: "security@micros0ft-support.com",
        subject: "Password Reset Required",
        message: "Suspicious login activity has been detected. Reset your password immediately to secure your Microsoft account.",
        link: "http://micros0ft-support.com/reset",
        correctAnswer: "phishing",
        explanation: "This is phishing. The domain replaces the letter 'o' in Microsoft with the number zero. This technique is called lookalike-domain or typosquatting."
    }
];


// ========================================
// GAME VARIABLES
// ========================================

let currentQuestion = 0;
let score = 0;
let vaultHealth = 100;


// ========================================
// LOAD A QUESTION ONTO THE SCREEN
// ========================================

function loadQuestion() {
    const question = questions[currentQuestion];

    document.getElementById("questionNumber").textContent =
        ` ${currentQuestion + 1} of ${questions.length}`;

    document.getElementById("sender").textContent = question.sender;
    document.getElementById("subject").textContent = question.subject;
    document.getElementById("message").textContent = question.message;
    document.getElementById("link").textContent =
        question.link || "No link included";

    // Clear feedback from previous question
    document.getElementById("feedback").innerHTML = "";

    // Hide Next button until player answers
    document.getElementById("next-btn").hidden = true;

    // Re-enable answer buttons
    document.getElementById("phishing-btn").disabled = false;
    document.getElementById("legitimate-btn").disabled = false;
}


// ========================================
// CHECK THE PLAYER'S ANSWER
// ========================================

function checkAnswer(playerAnswer) {
    const question = questions[currentQuestion];

    // Stop the player from clicking multiple answers
    document.getElementById("phishing-btn").disabled = true;
    document.getElementById("legitimate-btn").disabled = true;

    if (playerAnswer === question.correctAnswer) {
        score++;

        showFeedback(true, question.explanation);

    } else {
        vaultHealth -= 20;

        if (vaultHealth < 0) {
            vaultHealth = 0;
        }

        showFeedback(false, question.explanation);
    }

    updateGameStats();
}


// ========================================
// SHOW WHETHER THE PLAYER WAS RIGHT/WRONG
// ========================================

function showFeedback(correct, explanation) {
    const feedback = document.getElementById("feedback");

    if (correct) {
        feedback.innerHTML = `
            <h3>🔐 THREAT BLOCKED!</h3>
            <p>${explanation}</p>
        `;
    } else {
        feedback.innerHTML = `
            <h3>⚠️ SECURITY BREACH!</h3>
            <p>${explanation}</p>
        `;
    }

    // Show Next Message button
    document.getElementById("next-btn").hidden = false;
}


// ========================================
// UPDATE SCORE AND VAULT HEALTH
// ========================================

function updateGameStats() {
    document.getElementById("score").textContent =
        `Score: ${score}`;

    document.getElementById("vault-health").textContent =
        `${vaultHealth}%`;
}


// ========================================
// PHISHING BUTTON
// ========================================

document.getElementById("phishing-btn").addEventListener("click", function () {
    checkAnswer("phishing");
});


// ========================================
// LEGITIMATE BUTTON
// ========================================

document.getElementById("legitimate-btn").addEventListener("click", function () {
    checkAnswer("safe");
});


// ========================================
// NEXT QUESTION BUTTON
// ========================================

document.getElementById("next-btn").addEventListener("click", function () {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        endGame();
    }
});


// ========================================
// END THE GAME
// ========================================

function endGame() {
    const game = document.getElementById("game-screen");

    if (score >= 4) {
        game.innerHTML = `
            <h1>🔐 HEIST STOPPED</h1>

            <h2>The Rowdy Vault is secure!</h2>

            <p>
                You correctly identified
                ${score} out of ${questions.length} messages.
            </p>

            <p>
                Final Vault Integrity: ${vaultHealth}%
            </p>

            <button onclick="location.reload()">
                PLAY AGAIN
            </button>
        `;
    } else {
        game.innerHTML = `
            <h1>🚨 VAULT BREACHED</h1>

            <h2>The attackers got through!</h2>

            <p>
                You correctly identified
                ${score} out of ${questions.length} messages.
            </p>

            <p>
                Final Vault Integrity: ${vaultHealth}%
            </p>

            <button onclick="location.reload()">
                TRY AGAIN
            </button>
        `;
    }
}


// ========================================
// START THE GAME
// ========================================

document.getElementById("start-btn").addEventListener("click", function () {
    
    document.getElementById("home-screen").hidden = true;
    document.getElementById("game-screen").hidden = false;

    updateGameStats();
    loadQuestion();
});