document.addEventListener('DOMContentLoaded', () => {
  const planetInfo = document.getElementById('planet-info');

  // Array de nombres de planetas
  const planetNames = ['mercurio', 'venus', 'tierra', 'marte', 'jupiter', 'saturno', 'urano', 'neptuno'];

  // Promesas de todas las solicitudes de planetas
  const planetRequests = planetNames.map(planetName => {
      return fetch(`http://localhost:3001/${planetName}`)
          .then(response => response.json())
          .catch(error => {
              console.error(`Error fetching data for ${planetName}:`, error);
              return { error: `Failed to retrieve data for ${planetName}` };
          });
  });

  // Ejecutar todas las solicitudes en paralelo
  Promise.all(planetRequests)
      .then(responses => {
          responses.forEach((data, index) => {
              console.log(data);
              if (!data.error) {
                  const planet = data[0]; // Asumiendo que la API devuelve una lista de resultados
                  planetInfo.innerHTML += `
                      <h2>${planet.name}</h2>
                      <p>Mass: ${planet.mass}</p>
                      <p>Radius: ${planet.radius}</p>
                      <p>Orbital Period: ${planet.period} days</p>
                      <p>Distance from Sun: ${planet.semi_major_axis} AU</p>
                      <p>Temperature: ${planet.temperature} K</p>
                      <p>Distance from Earth: ${planet.distance_light_year} light years</p>
                      <p>Host Star Mass: ${planet.host_star_mass}</p>
                      <p>Host Star Temperature: ${planet.host_star_temperature} K</p>
                      <hr>
                  `;
              } else {
                  planetInfo.innerHTML += `<p>${data.error}</p>`;
              }
          });
      })
      .catch(error => {
          console.error('Error:', error);
          planetInfo.innerHTML = `<p>Failed to retrieve data</p>`;
      });
});
