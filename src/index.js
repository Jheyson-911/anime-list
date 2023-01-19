import * as dotenv from 'dotenv';
import app from './app.js';

dotenv.config();
app.set('port', process.env.API_PORT || 3000);

app.listen(app.get('port'), () => {
  console.log(`Listen on port ${process.env.API_PORT}`);
});
