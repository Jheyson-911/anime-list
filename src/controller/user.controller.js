import * as dotenv from 'dotenv';
import bcrypjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../model/user.model.js';

dotenv.config();

export const register = async (req, res) => {
  const { email, password, rol } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      message: 'Complete todos los campos',
      data: [],
    });
  }
  try {
    const userFound = await User.findOne({ where: { email } });
    if (userFound !== null) {
      return res.status(400).json({
        message: 'Usuario ya existente',
        data: [],
      });
    }
    const contrasenia = bcrypjs.hashSync(password, 10);
    const user = await User.create({ email, password: contrasenia, rol });
    return res.status(201).json({
      message: 'Usuario creado correctamente',
      data: user,
    });
  } catch (err) {
    return res.status(404).json({
      message: 'Ocurrio un error al crear el usuario',
      data: err,
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      message: 'Complete todos los campos',
      data: [],
    });
  }
  try {
    const user = await User.findOne({ where: { email } });
    if (user === null) {
      return res.status(404).json({
        message: 'Email incorrecto',
        data: [],
      });
    }
    const comparehash = bcrypjs.compareSync(password, user.password);
    if (!comparehash) {
      return res.status(404).json({
        message: 'Contraseña incorrecta',
        data: [],
      });
    }
    const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
      expiresIn: '10days',
    });
    return res.status(201).json({
      message: 'Usuario logueado',
      data: { token, user },
    });
  } catch (err) {
    return res.status(404).json({
      error: 'Ocurrio un error al iniciar sesion',
      data: err,
    });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    return res.status(201).json({
      message: 'Lista de usuarios',
      data: users,
    });
  } catch (err) {
    return res.status(404).json({
      error: 'Ocurrio un error al intentar listar los usuarios',
      data: err,
    });
  }
};
