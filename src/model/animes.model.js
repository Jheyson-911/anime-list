import { DataTypes } from 'sequelize';
import connection from '../db/db.js';

const anime = connection.define(
  'Animes',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
    },
    descripcion: {
      type: DataTypes.STRING,
    },
    estado: {
      type: DataTypes.STRING,
    },
    url_img: {
      type: DataTypes.STRING,
    },
    calificacion: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    comment: 'Este modelo representa la tabla de animes',
  }
);

export default anime;
