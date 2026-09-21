const widget = document.getElementById('sakura-widget');
const timer = document.getElementById ('timer')
const button = document.getElementById ('timer-button')

let isDragging = false;
let offsetX;
let offsetY;
let timeLeft = 1500;


button.addEventListener ('click', () => {
    setInterval (() => {    
        timeLeft = timeLeft - 1;

        const minutes = Math.floor (timeLeft/60);
        const seconds = timeLeft % 60;

        timer.textContent = `${minutes}: ${seconds.toString ().padStart (2, '0')}`;
    }, 1000);
});

widget.addEventListener('mousedown', (e) => {

    if (e.target.tagName !== 'BUTTON') {

        isDragging = true;

        offsetX = e.offsetX;
        offsetY = e.offsetY;

    }

});

document.addEventListener('mousemove', (e) => {

    if (isDragging) {

        widget.style.left = e.clientX - offsetX + 'px';
        widget.style.top = e.clientY - offsetY + 'px';

    }

});

document.addEventListener('mouseup', () => {

    isDragging = false;

});