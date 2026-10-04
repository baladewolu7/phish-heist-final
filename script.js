const questions = [
    {
        sender: "IT-Support@utsa-security.net",
        subject: "URGENT: Your Account Will Be Suspended",
        message: "We detected unusual activity on your account. Verify your information immediately to prevent suspension.",
        link: "http://utsa-accountverify.net/login",
        correctAnswer: "phishing",
        explanation: "This is phishing. The sender uses an unofficial domain, creates urgency, and directs you to a suspicious login link."
    },

    {
        sender: "no-reply@utsa.edu",
        subject: "Scheduled Canvas Maintenance",
        message: "Canvas will undergo scheduled maintenance Saturday from 2 AM to 4 AM. No action is required.",
        link: "",
        correctAnswer: "legitimate",
        explanation: "This appears legitimate. It uses an official university domain and does not request sensitive information."
    },

    {
        sender: "delivery@usps-redelivery-support.net",
        subject: "Package Delivery Failed",
        message: "Your package could not be delivered. Pay a $1.49 redelivery fee to schedule another attempt.",
        link: "http://usps-redelivery-support.net/payment",
        correctAnswer: "phishing",
        explanation: "This is phishing. The domain is not an official USPS domain and the message attempts to collect payment information."
    },

    {
        sender: "hiring.manager.jobs@gmail.com",
        subject: "Congratulations! $500/Week Remote Position",
        message: "You have been selected for a remote assistant position. Reply with your name, address, phone number, and banking information.",
        link: "",
        correctAnswer: "phishing",
        explanation: "This is phishing. The unsolicited job offer promises high pay and immediately requests sensitive information."
    },

    {
        sender: "recruiting@company.com",
        subject: "Interview Confirmation",
        message: "Thank you for applying for our internship program. Your interview has been scheduled through our recruiting portal.",
        link: "https://careers.company.com",
        correctAnswer: "legitimate",
        explanation: "This appears legitimate. It refers to an existing application and directs the user to the organization's career website."
    },

    {
        sender: "security@micros0ft-support.com",
        subject: "Password Reset Required",
        message: "Suspicious login activity has been detected. Reset your password immediately to secure your account.",
        link: "http://micros0ft-support.com/reset",
        correctAnswer: "phishing",
        explanation: "This is phishing. The domain uses a zero instead of the letter O in Microsoft, which is a lookalike-domain technique."
    }
];
let currentQuestion = 0;
let score = 0;
let vaultHealth = 100;
const homeScreen = document.getElementById("home-screen");
const gameScreen = document.getElementById("game-screen");

const startBtn = document.getElementById("start-btn");

const questionNumber = document.getElementById("question-number");
const sender = document.getElementById("sender");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const link = document.getElementById("link");

const phishingBtn = document.getElementById("phishing-btn");
const legitimateBtn = document.getElementById("legitimate-btn");

const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");