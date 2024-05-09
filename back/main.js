const express = require('express');
const app = express();
const port = 3001;

// API PLANETAS 
app.get('/mercurio', (req, res) => {
    const axios = require('axios');

    let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://api.api-ninjas.com/v1/planets?name=MERCURY',
    headers: { 
        'X-Api-Key': 'QXcTvnRQSwwf+uWm7W7FHQ==jof5MLouWMKumU4n'
    }
    };

    axios.request(config)
    .then((response) => {
        const data = JSON.stringify(response.data);
    console.log(data);
    res.send(data);

    })
    .catch((error) => {
    console.log(error);
    });
});

app.get('/venus', (req, res) => {
  const axios = require('axios');

  let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://api.api-ninjas.com/v1/planets?name=VENUS',
  headers: { 
      'X-Api-Key': 'QXcTvnRQSwwf+uWm7W7FHQ==jof5MLouWMKumU4n'
  }
  };

  axios.request(config)
  .then((response) => {
      const data = JSON.stringify(response.data);
  console.log(data);
  res.send(data);

  })
  .catch((error) => {
  console.log(error);
  });
});

app.get('/tierra', (req, res) => {
    const axios = require('axios');

    let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://api.api-ninjas.com/v1/planets?name=EARTH',
    headers: { 
        'X-Api-Key': 'QXcTvnRQSwwf+uWm7W7FHQ==jof5MLouWMKumU4n'
    }
    };

    axios.request(config)
    .then((response) => {
        const data = JSON.stringify(response.data);
    console.log(data);
    res.send(data);

    })
    .catch((error) => {
    console.log(error);
    });
});

app.get('/marte', (req, res) => {
  const axios = require('axios');

  let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://api.api-ninjas.com/v1/planets?name=MARS',
  headers: { 
      'X-Api-Key': 'QXcTvnRQSwwf+uWm7W7FHQ==jof5MLouWMKumU4n'
  }
  };

  axios.request(config)
  .then((response) => {
      const data = JSON.stringify(response.data);
  console.log(data);
  res.send(data);

  })
  .catch((error) => {
  console.log(error);
  });
});

app.get('/jupiter', (req, res) => {
  const axios = require('axios');

  let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://api.api-ninjas.com/v1/planets?name=JUPITER',
  headers: { 
      'X-Api-Key': 'QXcTvnRQSwwf+uWm7W7FHQ==jof5MLouWMKumU4n'
  }
  };

  axios.request(config)
  .then((response) => {
      const data = JSON.stringify(response.data);
  console.log(data);
  res.send(data);

  })
  .catch((error) => {
  console.log(error);
  });
});

app.get('/saturno', (req, res) => {
  const axios = require('axios');

  let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://api.api-ninjas.com/v1/planets?name=SATURN',
  headers: { 
      'X-Api-Key': 'QXcTvnRQSwwf+uWm7W7FHQ==jof5MLouWMKumU4n'
  }
  };

  axios.request(config)
  .then((response) => {
      const data = JSON.stringify(response.data);
  console.log(data);
  res.send(data);

  })
  .catch((error) => {
  console.log(error);
  });
});

app.get('/urano', (req, res) => {
  const axios = require('axios');

  let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://api.api-ninjas.com/v1/planets?name=URANUS',
  headers: { 
      'X-Api-Key': 'QXcTvnRQSwwf+uWm7W7FHQ==jof5MLouWMKumU4n'
  }
  };

  axios.request(config)
  .then((response) => {
      const data = JSON.stringify(response.data);
  console.log(data);
  res.send(data);

  })
  .catch((error) => {
  console.log(error);
  });
});

app.get('/neptuno', (req, res) => {
  const axios = require('axios');

  let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://api.api-ninjas.com/v1/planets?name=NEPTUNE',
  headers: { 
      'X-Api-Key': 'QXcTvnRQSwwf+uWm7W7FHQ==jof5MLouWMKumU4n'
  }
  };

  axios.request(config)
  .then((response) => {
      const data = JSON.stringify(response.data);
  console.log(data);
  res.send(data);

  })
  .catch((error) => {
  console.log(error);
  });
});


app.listen(port, () => {
  console.log(`La aplicación está escuchando en http://localhost:${port}`);
});

