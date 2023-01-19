import { DataTypes } from 'sequelize';
import connection from '../db/db.js';

const pendientes = connection.define(
  'Pendientes',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
      comment: 'Campo donde ira el nombre del anime',
    },
  },
  {
    freezeTableName: true,
    comment: 'Este modelo representa la tabla pendientes',
  }
);
export default pendientes;
