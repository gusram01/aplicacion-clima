const argv = require('./config/yargs').argv;
const lugar = require('./config/coordenadas');
const clima = require('./config/clima-por-coordenadas');

const respuesta = async (direccionArgv) => {
  try {
    const { direccion, lat, long } = await lugar.getLugarLatLong(direccionArgv);
    const { temperatura, sensacionTermica } = await clima.getClima(lat, long);
    return `El clima en ${direccion} es de: ${temperatura}°C y la sensación termica es de: ${sensacionTermica}°C `;
  } catch (err) {
    return `No se pudo determinar el clima de: ${direccionArgv}`;
  }
}

respuesta(argv.direcccion)
  .then(console.log)
  .catch(console.log);


