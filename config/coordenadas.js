const axios = require('axios').default;

const getLugarLatLong = async (direction) => {
  /*
  * Se prepara el argumento que se enviara a la instancia de 'axios' con ayuda de
  * la función encodeURI: Encodes a text string as a valid Uniform Resource Identifier (URI)
  */
  const encodeUrl = encodeURI(direction);

  const instancia = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
    headers: { 'x-rapidapi-key': '61fa3537c4mshbacc5d60561d681p1184c9jsn4b81bcb0a94e' }
  });

  const resp = await instancia.get();

  if (resp.data.Results.length === 0) {
    throw new Error(`No hay resultados para ${direction}`);
  }

  const data = resp.data.Results[ 0 ];
  const direccion = data.name;
  const lat = data.lat;
  const long = data.lon;


  return { direccion, lat, long };
}

module.exports = {
  getLugarLatLong
}