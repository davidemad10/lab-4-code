document.addEventListener('DOMContentLoaded', () => {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#33FFF3', '#F3FF33'];
    const spans = document.querySelectorAll('.color-container span');
    const button = document.getElementById('changeColorButton');
    function getRandomColor() {
        return colors[Math.floor(Math.random() * colors.length)];
    }
    button.addEventListener('click', () => {
        spans.forEach(span => {
            const textColor = getRandomColor();
            const backgroundColor = getRandomColor();
            span.style.color = textColor;
            span.style.backgroundColor = backgroundColor;
        });
    });
});
