document.addEventListener("DOMContentLoaded", function() {
    const lines = document.querySelectorAll('.statisticsLine');
    lines.forEach(line => {
        const value = line.getAttribute('data-value');
        line.style.setProperty('--data-value', value);
    });
});