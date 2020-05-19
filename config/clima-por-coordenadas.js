const axios = require('axios').default;

const getClima = async (lat, long) => {

  const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=6e8e51586d9bca0b529a25de4b832464&units=metric`);
  if (resp.data.cod != 200) {
    throw new Error(`Error: ${resp.data.cod}`);
  }
  const temperatura = resp.data.main.temp;
  const sensacionTermica = resp.data.main.feels_like;
  return { temperatura, sensacionTermica };
}


module.exports = {
  getClima
}