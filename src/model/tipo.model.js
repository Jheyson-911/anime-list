import { DataTypes } from 'sequelize';
import connection from '../db/db.js';

const tipo = connection.define(
  'Tipo',
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
    comment: 'Este modelo representa la tabla de tipo',
    timestamps: false,
  }
);

export default tipo;
