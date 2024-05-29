document.addEventListener('DOMContentLoaded', function () {
    const planets = document.querySelectorAll('.planet');
    const infoBox = document.getElementById('info-box');

    planets.forEach(planet => {
        planet.addEventListener('mouseover', function () {
            const info = planet.getAttribute('data-info');
            infoBox.textContent = info;
            infoBox.style.display = 'block';
        });

        planet.addEventListener('mouseout', function () {
            infoBox.style.display = 'none';
        });
    });
});
