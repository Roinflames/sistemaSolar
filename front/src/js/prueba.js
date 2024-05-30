document.addEventListener('DOMContentLoaded', () => {
    const planetInfo = document.getElementById('planet-info');

    // Array de nombres de planetas
    const planetNames = ['mercurio', 'venus', 'tierra', 'marte', 'jupiter', 'saturno', 'urano', 'neptuno'];
    
    // Objeto de traducción para los nombres de los planetas
    const planetTranslations = {
        mercury: 'Mercurio',
        venus: 'Venus',
        earth: 'Tierra',
        mars: 'Marte',
        jupiter: 'Júpiter',
        saturn: 'Saturno',
        uranus: 'Urano',
        neptune: 'Neptuno'
    };

    // Objeto de traducción
    const translations = {
        name: 'Nombre',
        mass: 'Masa',
        radius: 'Radio',
        period: 'Período Orbital',
        semi_major_axis: 'Distancia del Sol',
        temperature: 'Temperatura del planeta',
        distance_light_year: 'Distancia de la Tierra',
        host_star_mass: 'Masa de la Estrella Anfitriona',
        host_star_temperature: 'Temperatura de la Estrella Anfitriona',
        days: 'días',
        AU: 'UA',
        K: 'K',
        light_years: 'años luz'
    };

    // Promesas de todas las solicitudes de planetas
    const planetRequests = planetNames.map(planetName => {
        return fetch(`http://localhost:3001/${planetName}`)
            .then(response => response.json())
            .catch(error => {
                console.error(`Error ${planetName}:`, error);
                return { error: `Presentamos algunos inconveniente con el planeta ${planetName}` };
            });
    });

    // Ejecutar todas las solicitudes en paralelo
    Promise.all(planetRequests)
        .then(responses => {
            responses.forEach((data, index) => {
                console.log(data);
                if (!data.error) {
                    const planet = data[0]; // Asumiendo que la API devuelve una lista de resultados
                    const planetNameInEnglish = planet.name.toLowerCase(); // Convertir a minúsculas para la clave del objeto de traducción
                    const planetNameInSpanish = planetTranslations[planetNameInEnglish] || planet.name;

                    const planetCard = document.createElement('div');
                    planetCard.className = 'card mb-3';
                    planetCard.innerHTML = `
                        <div class="card-body">
                            <h2 class="card-title">${translations.name}: ${planetNameInSpanish}</h2>
                            <p class="card-text">${translations.mass}: ${planet.mass}</p>
                            <p class="card-text">${translations.radius}: ${planet.radius}</p>
                            <p class="card-text">${translations.period}: ${planet.period} ${translations.days}</p>
                            <p class="card-text">${translations.semi_major_axis}: ${planet.semi_major_axis} ${translations.AU}</p>
                            <p class="card-text">${translations.temperature}: ${planet.temperature} ${translations.K}</p>
                            <p class="card-text">${translations.distance_light_year}: ${planet.distance_light_year} ${translations.light_years}</p>
                            <button class="btn btn-primary btn-block read-button">Leer</button>
                        </div>
                    `;
                    planetInfo.appendChild(planetCard);

                    const readButton = planetCard.querySelector('.read-button');
                    readButton.addEventListener('click', () => {
                        readText(planetCard);
                    });
                } else {
                    planetInfo.innerHTML += `<p class="text-danger">${data.error}</p>`;
                }
            });
        })
        .catch(error => {
            console.error('Error:', error);
            planetInfo.innerHTML = `<p class="text-danger">Error al obtener la información</p>`;
        });

    // Función para leer el texto en voz alta
    function readText(element) {
        const planetInfoText = element.innerText;
        const speech = new SpeechSynthesisUtterance(planetInfoText);
        speech.lang = 'es-ES'; // Establecer el idioma a español
        window.speechSynthesis.speak(speech);
    }
});




/*document.addEventListener('DOMContentLoaded', () => {
    // Array de nombres de planetas
    const planetNames = ['mercurio', 'venus', 'tierra', 'marte', 'jupiter', 'saturno', 'urano', 'neptuno'];
    
    // Objeto de traducción para los nombres de los planetas
    const planetTranslations = {
        mercury: 'mercurio',
        venus: 'venus',
        earth: 'tierra',
        mars: 'marte',
        jupiter: 'jupiter',
        saturn: 'saturno',
        uranus: 'urano',
        neptune: 'neptuno'
    };

    // Objeto de traducción
    const translations = {
        name: 'Nombre',
        mass: 'Masa',
        radius: 'Radio',
        period: 'Período Orbital',
        semi_major_axis: 'Distancia del Sol',
        temperature: 'Temperatura del planeta',
        distance_light_year: 'Distancia de la Tierra',
        host_star_mass: 'Masa de la Estrella Anfitriona',
        host_star_temperature: 'Temperatura de la Estrella Anfitriona',
        days: 'días',
        AU: 'UA',
        K: 'K',
        light_years: 'años luz'
    };

    // Promesas de todas las solicitudes de planetas
    const planetRequests = planetNames.map(planetName => {
        return fetch(`http://localhost:3001/${planetName}`)
            .then(response => response.json())
            .catch(error => {
                console.error(`Error ${planetName}:`, error);
                return { error: `Presentamos algunos inconvenientes con el planeta ${planetName}` };
            });
    });

    // Ejecutar todas las solicitudes en paralelo
    Promise.all(planetRequests)
        .then(responses => {
            responses.forEach((data, index) => {
                console.log(data);
                if (!data.error) {
                    const planet = data[0]; // Asumiendo que la API devuelve una lista de resultados
                    const planetNameInEnglish = planet.name.toLowerCase(); // Convertir a minúsculas para la clave del objeto de traducción
                    const planetNameInSpanish = planetTranslations[planetNameInEnglish] || planet.name;

                    const planetInfoElement = document.getElementById(`${planetNameInSpanish}-info`);
                    if (planetInfoElement) {
                        planetInfoElement.innerHTML = `
                            <p><strong>${translations.name}:</strong> ${planetNameInSpanish}</p>
                            <p><strong>${translations.mass}:</strong> ${planet.mass}</p>
                            <p><strong>${translations.radius}:</strong> ${planet.radius}</p>
                            <p><strong>${translations.period}:</strong> ${planet.period} ${translations.days}</p>
                            <p><strong>${translations.semi_major_axis}:</strong> ${planet.semi_major_axis} ${translations.AU}</p>
                            <p><strong>${translations.temperature}:</strong> ${planet.temperature} ${translations.K}</p>
                            <p><strong>${translations.distance_light_year}:</strong> ${planet.distance_light_year} ${translations.light_years}</p>
                            <p><strong>${translations.host_star_mass}:</strong> ${planet.host_star_mass}</p>
                            <p><strong>${translations.host_star_temperature}:</strong> ${planet.host_star_temperature} ${translations.K}</p>
                            <button class="btn btn-primary read-button" style="font-size: smaller;">Leer</button>
                        `;

                        const readButton = planetInfoElement.querySelector('.read-button');
                        readButton.addEventListener('click', () => {
                            readText(planetInfoElement);
                        });
                    }
                } else {
                    const planetSection = document.getElementById(planetTranslations[planetNames[index]]);
                    if (planetSection) {
                        planetSection.innerHTML += `<p class="text-danger">${data.error}</p>`;
                    }
                }
            });
        })
        .catch(error => {
            console.error('Error:', error);
            planetNames.forEach(planetName => {
                const planetSection = document.getElementById(planetTranslations[planetName]);
                if (planetSection) {
                    planetSection.innerHTML += `<p class="text-danger">Error al obtener la información</p>`;
                }
            });
        });

    // Función para leer el texto en voz alta
    function readText(element) {
        const planetInfoText = element.innerText;
        const speech = new SpeechSynthesisUtterance(planetInfoText);
        speech.lang = 'es-ES'; // Establecer el idioma a español
        window.speechSynthesis.speak(speech);
    }
}); */
