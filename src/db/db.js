import { Sequelize } from 'sequelize';
import credentials from '../config/config.js';

const sequelize = new Sequelize(
  `${credentials.database}`,
  `${credentials.username}`,
  `${credentials.password}`,
  {
    host: credentials.hostname,
    dialect: 'mysql',
  }
);

export default sequelize;
