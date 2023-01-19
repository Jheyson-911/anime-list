import * as dotenv from 'dotenv';
import app from './app.js';
import connection from './db/db.js';

dotenv.config();
app.set('port', process.env.API_PORT || 3000);

async function connect() {
  try {
    await connection.authenticate();
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
