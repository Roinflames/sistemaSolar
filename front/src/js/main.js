// public/main.js

document.addEventListener('DOMContentLoaded', () => {
    const planetInfo = document.getElementById('planet-info');

    fetch('http://localhost:3001/mercurio')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.length > 0) {
          const planet = data[0]; // Asumiendo que la API devuelve una lista de resultados
          planetInfo.innerHTML = `
            <h2>${planet.name}</h2>
            <p>Mass: ${planet.mass}</p>
            <p>Radius: ${planet.radius}</p>
            <p>Orbital Period: ${planet.period} days</p>
            <p>Distance from Sun: ${planet.semi_major_axis} AU</p>
            <p>Temperature: ${planet.temperature} K</p>
            <p>Distance from Earth: ${planet.distance_light_year} light years</p>
            <p>Host Star Mass: ${planet.host_star_mass}</p>
            <p>Host Star Temperature: ${planet.host_star_temperature} K</p>
          `;
        } else {
          planetInfo.innerHTML = `<p>No data found for Mercury</p>`;
        }
      })
      .catch(error => {
        console.error('Error:', error);
        planetInfo.innerHTML = `<p>Failed to retrieve data</p>`;
      });


      fetch('http://localhost:3001/venus')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.length > 0) {
          const planet = data[0]; // Asumiendo que la API devuelve una lista de resultados
          planetInfo.innerHTML = `
            <h2>${planet.name}</h2>
            <p>Mass: ${planet.mass}</p>
            <p>Radius: ${planet.radius}</p>
            <p>Orbital Period: ${planet.period} days</p>
            <p>Distance from Sun: ${planet.semi_major_axis} AU</p>
            <p>Temperature: ${planet.temperature} K</p>
            <p>Distance from Earth: ${planet.distance_light_year} light years</p>
            <p>Host Star Mass: ${planet.host_star_mass}</p>
            <p>Host Star Temperature: ${planet.host_star_temperature} K</p>
          `;
        } else {
          planetInfo.innerHTML = `<p>No data found for Mercury</p>`;
        }
      })
      .catch(error => {
        console.error('Error:', error);
        planetInfo.innerHTML = `<p>Failed to retrieve data</p>`;
      });

      fetch('http://localhost:3001/tierra')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.length > 0) {
          const planet = data[0]; // Asumiendo que la API devuelve una lista de resultados
          planetInfo.innerHTML = `
            <h2>${planet.name}</h2>
            <p>Mass: ${planet.mass}</p>
            <p>Radius: ${planet.radius}</p>
            <p>Orbital Period: ${planet.period} days</p>
            <p>Distance from Sun: ${planet.semi_major_axis} AU</p>
            <p>Temperature: ${planet.temperature} K</p>
            <p>Distance from Earth: ${planet.distance_light_year} light years</p>
            <p>Host Star Mass: ${planet.host_star_mass}</p>
            <p>Host Star Temperature: ${planet.host_star_temperature} K</p>
          `;
        } else {
          planetInfo.innerHTML = `<p>No data found for Mercury</p>`;
        }
      })
      .catch(error => {
        console.error('Error:', error);
        planetInfo.innerHTML = `<p>Failed to retrieve data</p>`;
      });

      fetch('http://localhost:3001/marte')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.length > 0) {
          const planet = data[0]; // Asumiendo que la API devuelve una lista de resultados
          planetInfo.innerHTML = `
            <h2>${planet.name}</h2>
            <p>Mass: ${planet.mass}</p>
            <p>Radius: ${planet.radius}</p>
            <p>Orbital Period: ${planet.period} days</p>
            <p>Distance from Sun: ${planet.semi_major_axis} AU</p>
            <p>Temperature: ${planet.temperature} K</p>
            <p>Distance from Earth: ${planet.distance_light_year} light years</p>
            <p>Host Star Mass: ${planet.host_star_mass}</p>
            <p>Host Star Temperature: ${planet.host_star_temperature} K</p>
          `;
        } else {
          planetInfo.innerHTML = `<p>No data found for Mercury</p>`;
        }
      })
      .catch(error => {
        console.error('Error:', error);
        planetInfo.innerHTML = `<p>Failed to retrieve data</p>`;
      });

      fetch('http://localhost:3001/jupiter')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.length > 0) {
          const planet = data[0]; // Asumiendo que la API devuelve una lista de resultados
          planetInfo.innerHTML = `
            <h2>${planet.name}</h2>
            <p>Mass: ${planet.mass}</p>
            <p>Radius: ${planet.radius}</p>
            <p>Orbital Period: ${planet.period} days</p>
            <p>Distance from Sun: ${planet.semi_major_axis} AU</p>
            <p>Temperature: ${planet.temperature} K</p>
            <p>Distance from Earth: ${planet.distance_light_year} light years</p>
            <p>Host Star Mass: ${planet.host_star_mass}</p>
            <p>Host Star Temperature: ${planet.host_star_temperature} K</p>
          `;
        } else {
          planetInfo.innerHTML = `<p>No data found for Mercury</p>`;
        }
      })
      .catch(error => {
        console.error('Error:', error);
        planetInfo.innerHTML = `<p>Failed to retrieve data</p>`;
      });

      fetch('http://localhost:3001/saturno')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.length > 0) {
          const planet = data[0]; // Asumiendo que la API devuelve una lista de resultados
          planetInfo.innerHTML = `
            <h2>${planet.name}</h2>
            <p>Mass: ${planet.mass}</p>
            <p>Radius: ${planet.radius}</p>
            <p>Orbital Period: ${planet.period} days</p>
            <p>Distance from Sun: ${planet.semi_major_axis} AU</p>
            <p>Temperature: ${planet.temperature} K</p>
            <p>Distance from Earth: ${planet.distance_light_year} light years</p>
            <p>Host Star Mass: ${planet.host_star_mass}</p>
            <p>Host Star Temperature: ${planet.host_star_temperature} K</p>
          `;
        } else {
          planetInfo.innerHTML = `<p>No data found for Mercury</p>`;
        }
      })
      .catch(error => {
        console.error('Error:', error);
        planetInfo.innerHTML = `<p>Failed to retrieve data</p>`;
      });

      fetch('http://localhost:3001/urano')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.length > 0) {
          const planet = data[0]; // Asumiendo que la API devuelve una lista de resultados
          planetInfo.innerHTML = `
            <h2>${planet.name}</h2>
            <p>Mass: ${planet.mass}</p>
            <p>Radius: ${planet.radius}</p>
            <p>Orbital Period: ${planet.period} days</p>
            <p>Distance from Sun: ${planet.semi_major_axis} AU</p>
            <p>Temperature: ${planet.temperature} K</p>
            <p>Distance from Earth: ${planet.distance_light_year} light years</p>
            <p>Host Star Mass: ${planet.host_star_mass}</p>
            <p>Host Star Temperature: ${planet.host_star_temperature} K</p>
          `;
        } else {
          planetInfo.innerHTML = `<p>No data found for Mercury</p>`;
        }
      })
      .catch(error => {
        console.error('Error:', error);
        planetInfo.innerHTML = `<p>Failed to retrieve data</p>`;
      });
      
      fetch('http://localhost:3001/neptuno')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.length > 0) {
          const planet = data[0]; // Asumiendo que la API devuelve una lista de resultados
          planetInfo.innerHTML = `
            <h2>${planet.name}</h2>
            <p>Mass: ${planet.mass}</p>
            <p>Radius: ${planet.radius}</p>
            <p>Orbital Period: ${planet.period} days</p>
            <p>Distance from Sun: ${planet.semi_major_axis} AU</p>
            <p>Temperature: ${planet.temperature} K</p>
            <p>Distance from Earth: ${planet.distance_light_year} light years</p>
            <p>Host Star Mass: ${planet.host_star_mass}</p>
            <p>Host Star Temperature: ${planet.host_star_temperature} K</p>
          `;
        } else {
          planetInfo.innerHTML = `<p>No data found for Mercury</p>`;
        }
      })
      .catch(error => {
        console.error('Error:', error);
        planetInfo.innerHTML = `<p>Failed to retrieve data</p>`;
      });
});
