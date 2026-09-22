const widget = document.getElementById('sakura-widget');
const timer = document.getElementById('timer');
const button = document.getElementById('timer-button');

let timeLeft = 1500;
let timerInterval = null;

button.addEventListener('click', () => {

    if (timerInterval) {
        return;
    }

    timerInterval = setInterval(() => {

        timeLeft = timeLeft - 1;

        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;

        timer.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

        if (timeLeft <= 0) {

            clearInterval(timerInterval);
            timerInterval = null;

            timeLeft = 1500;
            timer.textContent = '25:00';
        }

    }, 1000);
});

const petals = document.getElementById("petals");

console.log(petals);

for (let i = 0; i < 15; i++) {

    const petal = document.createElement("div");

    petal.classList.add("petal");

    petal.style.left = Math.random() * 100 + "%";
    petal.style.animationDuration = 4 + Math.random() * 4 + "s";
    petal.style.animationDelay = Math.random() * 4 + "s";

    petals.appendChild(petal);
}