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
      allowNull: true,
      comment: 'Campo donde ira el nombre del anime',
    },
    descripcion: {
      type: DataTypes.STRING,
      comment: 'Campo para la descripcion del anime (opcional)',
    },
    visto: {
      type: DataTypes.STRING,
      defaultValue: 'NO',
      comment: 'Campo para controlar si el anime fue visto o no ',
      validate: {
        isIn: {
          args: [['SI', 'NO']],
          msg: 'Solamente puede insertar SI o NO',
        },
      },
    },
    favorito: {
      type: DataTypes.STRING,
      defaultValue: 'NO',
      comment: 'Campo para seleccionar el anime como facorito',
      validate: {
        isUppercase: {
          args: true,
          msg: 'Solamente se aceptan mayusculas',
        },
        isIn: {
          args: [['SI', 'NO']],
          msg: 'Solamente puede insertar SI o NO',
        },
      },
    },
    url_img: {
      type: DataTypes.STRING,
      comment: 'Campo para almacenar la url de la portada del anime',
      validate: {
        isUrl: {
          args: true,
          msg: 'Ingrese una url valida',
        },
      },
    },
    calificacion: {
      type: DataTypes.FLOAT,
      campo: 'Campo para controlar la calificion del anime',
      validate: {
        isFloat: {
          args: true,
          msg: 'Ingrese un numero flotante',
        },
      },
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
