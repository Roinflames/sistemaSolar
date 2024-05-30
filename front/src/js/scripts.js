//Mensaje con el nombre del planeta 

/* document.addEventListener('DOMContentLoaded', function () {
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
}); */

//NO OCUPADO MATALO
document.addEventListener('DOMContentLoaded', function () {
    const planets = document.querySelectorAll('.planet');

    planets.forEach(planet => {
        planet.addEventListener('mouseover', function () {
            const planetName = planet.getAttribute('data-name');
            showPopup(planet, planetName);
        });

        planet.addEventListener('mouseout', function () {
            hidePopup();
        });
    });

    function showPopup(planet, planetName) {
        const popup = document.createElement('div');
        popup.textContent = planetName;
        popup.classList.add('planet-popup');

        // Calcula la posición del popup relativa al planeta
        const rect = planet.getBoundingClientRect();
        const popupTop = rect.top + window.scrollY - 30; // 30px arriba del planeta
        const popupLeft = rect.left + window.scrollX + (planet.offsetWidth - popup.offsetWidth) / 2; // centrado horizontalmente

        // Establece la posición del popup
        popup.style.top = popupTop + 'px';
        popup.style.left = popupLeft + 'px';

        // Agrega el popup al cuerpo del documento
        document.body.appendChild(popup);
    }

    function hidePopup() {
        const popup = document.querySelector('.planet-popup');
        if (popup) {
            popup.remove();
        }
    }
});
