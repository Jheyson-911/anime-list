import { DataTypes } from 'sequelize';
import connection from '../db/db.js';
import tipo from './tipo.model.js';
import etiqueta from './etiquetas.model.js';

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

// Asociacion con el modelo Tipo

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

// Asociacion del modelo Etiqueta
anime.belongsToMany(etiqueta, {
  through: 'Anime_etiqueta',
  foreignKey: 'anime_Id',
  timestamps: false,
});

etiqueta.belongsToMany(anime, {
  through: 'Anime_etiqueta',
  foreignKey: 'etiqueta_Id',
  timestamps: false,
});

export default anime;
