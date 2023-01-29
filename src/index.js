import * as dotenv from 'dotenv';
import app from './app.js';
import connection from './db/db.js';
/* import AnimeModel from './model/animes.model.js';
import userModel from './model/user.model.js';
import etiquetaModel from './model/etiquetas.model.js';
import tipoModel from './model/tipo.model.js';
import pendienteModel from './model/pendientes.model.js';
 */
dotenv.config();
app.set('port', process.env.API_PORT || 3000);

async function connect() {
  try {
    await connection.authenticate();
    // await connection.sync({ force: true });
    console.log(`Conexion exitosa`);
    app.listen(app.get('port'), () => {
      console.log(`Listen on port ${process.env.API_PORT}`);
    });
  } catch (err) {
    console.log(
      `Ocurrio un error al conectar con la Base de datos: ${err.message}`
    );
  }
}
connect();
