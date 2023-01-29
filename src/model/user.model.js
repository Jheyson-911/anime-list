import { DataTypes } from 'sequelize';
import connection from '../db/db.js';
import animes from './animes.model.js';
import pendientes from './pendientes.model.js';

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
      allowNull: true,
      unique: true,
      validate: {
        isEmail: {
          args: true,
          msg: 'Solamente se acepta email',
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    rol: {
      type: DataTypes.STRING,
      defaultValue: 'USER',
      validate: {
        isIn: {
          args: [['ADMIN', 'USER']],
          msg: 'Solamente se pueden insertar ADMIN y USER',
        },
      },
    },
  },
  {
    freezeTableName: true,
    comment: 'Este modelo depresenta la tabla de usuarios',
  }
);

// Asociacion con el modelo animes

user.hasOne(animes, {
  foreignKey: 'user_Id',
  allowNull: false,
});
animes.belongsTo(user, {
  foreignKey: 'user_Id',
  allowNull: false,
});
// Asociacion con el modelo pendientes

user.hasOne(pendientes, {
  foreignKey: 'user_Id',
  allowNull: false,
});
pendientes.belongsTo(user, {
  foreignKey: 'user_Id',
  allowNull: false,
});
export default user;
