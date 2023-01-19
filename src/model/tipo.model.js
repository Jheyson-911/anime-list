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
      allowNull: true,
      unique: true,
      validate: {
        isAlpha: {
          args: true,
          msg: 'Solamente se acepta palabras',
        },
      },
    },
  },
  {
    freezeTableName: true,
    comment: 'Este modelo representa la tabla de tipo',
    timestamps: false,
  }
);

export default tipo;
