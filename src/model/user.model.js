import { DataTypes } from 'sequelize';
import connection from '../db/db.js';

const user = connection.define(
  'User',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    rol: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    comment: 'Este modelo depresenta la tabla de usuarios',
  }
);
export default user;
