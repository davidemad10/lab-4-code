document.addEventListener('DOMContentLoaded', () => {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#33FFF3', '#F3FF33', '#A133FF', '#FF8633'];
    const paragraphs = [
        document.getElementById('paragraph1'),
        document.getElementById('paragraph2'),
        document.getElementById('paragraph3')
    ];

    function getRandomColor() {
        return colors[Math.floor(Math.random() * colors.length)];
    }

    paragraphs.forEach(paragraph => {
        paragraph.style.color = getRandomColor();
    });
});
