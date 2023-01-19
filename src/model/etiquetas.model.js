import { DataTypes } from 'sequelize';
import connection from '../db/db.js';

const etiquetas = connection.define(
  'Etiquetas',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    comment: 'Este modelo representa la tabla de etiquetas',
  }
);

export default etiquetas;
