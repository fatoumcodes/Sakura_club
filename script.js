const widget = document.getElementById('mood');

let isDragging = false;

widget.addEventListener('mousedown', (e) => {

    isDragging = true;

});

document.addEventListener('mousemove', (e) => {

    if (isDragging) {

        widget.style.left = e.clientX + 'px';
        widget.style.top = e.clientY + 'px';

    }

});

document.addEventListener('mouseup', () => {

    isDragging = false;

});