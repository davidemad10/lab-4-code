document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery img');
    images.forEach(img => {
        img.addEventListener('mouseover', () => {
            img.style.opacity = '0.3';
        });
        img.addEventListener('mouseout', () => {
            img.style.opacity = '1';
        });
    });
});
