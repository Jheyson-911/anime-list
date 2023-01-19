import { DataTypes } from 'sequelize';
import connection from '../db/db.js';
import tipo from './tipo.model.js';

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
anime.belongsToMany(tipo, {
  through: 'Anime_Tipo',
  foreignKey: 'anime_Id',
  timestamps: false,
});
tipo.belongsToMany(anime, {
  through: 'Anime_Tipo',
  foreignKey: 'tipo_Id',
  constraints: false,
  timestamps: false,
});
// Asociacion con el modelo Tipo
export default anime;
