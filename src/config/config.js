import * as dotenv from 'dotenv';

dotenv.config();
const credentials = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  hostname: process.env.DB_HOSTNAME,
  database: process.env.DB_DATABASE,
};

export default credentials;
