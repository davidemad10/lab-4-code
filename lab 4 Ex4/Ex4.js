document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        'Question 1: What is your name?',
        'Question 2: How old are you?',
        'Question 3: Where do you live?',
        'Question 4: What is your dream job?',
        'Question 5: What is your hobby?',
        'Question 6: What is your favorite food?',
        'Question 7: What is your favorite movie and why?',
        'Question 8: What is your favorite movie?',
        'Question 9: What is your favorite book?',
        'Question 10: what is your favorite season of the year and why?'
    ];

    let currentQuestionIndex = 0;

    const questionDisplay = document.getElementById('questionDisplay');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    function updateQuestion() {
        questionDisplay.textContent = questions[currentQuestionIndex];
        prevButton.disabled = currentQuestionIndex === 0;
        nextButton.disabled = currentQuestionIndex === questions.length - 1;
    }

    prevButton.addEventListener('click', () => {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            updateQuestion();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            updateQuestion();
        }
    });

    updateQuestion();
});
