document.addEventListener('DOMContentLoaded', () => {
    const planetNames = ['mercurio', 'venus', 'tierra', 'marte', 'jupiter', 'saturno', 'urano', 'neptuno'];

    const planetTranslations = {
        mercury: 'Mercurio',
        venus: 'Venus',
        earth: 'Tierra',
        mars: 'Marte',
        jupiter: 'Jupiter',
        saturn: 'Saturno',
        uranus: 'Urano',
        neptune: 'Neptuno'
    };

    const translations = {
        name: 'Nombre del Planeta',
        mass: 'Peso del Planeta',
        radius: 'Tamaño del Planeta',
        period: 'Tiempo para dar una vuelta al Sol',
        semi_major_axis: 'Distancia al Sol',
        temperature: 'Calor del Planeta',
        distance_light_year: 'Distancia desde la Tierra',
        host_star_mass: 'Peso de la Estrella',
        host_star_temperature: 'Calor de la Estrella',
        days: 'días',
        AU: 'UA',
        K: 'K',
        light_years: 'años luz'
    };

    const planetRequests = planetNames.map(planetName => {
        return fetch(`http://localhost:3001/${planetName}`)
            .then(response => response.json())
            .catch(error => {
                console.error(`Error ${planetName}:`, error);
                return { error: `Presentamos algunos inconvenientes con el planeta ${planetName}` };
            });
    });

    Promise.all(planetRequests)
        .then(responses => {
            responses.forEach((data, index) => {
                console.log(data);
                const planetSection = document.getElementById(planetNames[index]);
                const planetInfoDiv = planetSection.querySelector('.planet-info');

                if (!data.error) {
                    const planet = data[0];
                    const planetNameInEnglish = planet.name.toLowerCase();
                    const planetNameInSpanish = planetTranslations[planetNameInEnglish] || planet.name;

                    const planetCard = document.createElement('div');
                    planetCard.className = 'card mb-3';
                    planetCard.innerHTML = `
                        <div class="card-body">
                            <h2 class="card-title">${translations.name}: ${planetNameInSpanish}</h2>
                            <p class="card-text">${translations.mass}: ${planet.mass} masas solares</p>
                            <p class="card-text">${translations.radius}: ${planet.radius} radios terrestres</p>
                            <p class="card-text">${translations.period}: ${planet.period} ${translations.days}</p>
                            <p class="card-text">${translations.semi_major_axis}: ${planet.semi_major_axis} ${translations.AU}</p>
                            <p class="card-text">${translations.temperature}: ${planet.temperature} ${translations.K}</p>
                            <p class="card-text">${translations.distance_light_year}: ${planet.distance_light_year} ${translations.light_years}</p>
                            <button class="btn read-button custom-read-button" style="font-size: smaller;">Leer</button>
                        </div>
                    `;
                    planetInfoDiv.appendChild(planetCard);

                    const readButton = planetCard.querySelector('.read-button');
                    readButton.addEventListener('click', () => {
                        readText(planetCard);
                    });
                } else {
                    planetInfoDiv.innerHTML = `<p class="text-danger">${data.error}</p>`;
                }
            });
        })
        .catch(error => {
            console.error('Error:', error);
            planetNames.forEach(planetName => {
                const planetSection = document.getElementById(planetName);
                const planetInfoDiv = planetSection.querySelector('.planet-info');
                planetInfoDiv.innerHTML = `<p class="text-danger"> Error al obtener la información </p>`;
            });
        });

    function readText(element) {
        const planetInfoText = element.innerText;
        const speech = new SpeechSynthesisUtterance(planetInfoText);
        speech.lang = 'es-ES';
        window.speechSynthesis.speak(speech);
    }
});
