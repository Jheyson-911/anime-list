import * as dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

// eslint-disable-next-line consistent-return
const jwtVerify = (req, res, next) => {
  let token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({
      message: 'No tienes autorización',
      data: [],
    });
  }
  try {
    // eslint-disable-next-line prefer-destructuring
    token = token.split(' ')[1];
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    if (!decoded) {
      return res.status(404).json({ message: 'Token invalido', data: [] });
    }
    req.id = decoded.id;
    next();
  } catch (err) {
    res.status(404).json({
      message: 'Ocurrio un error al validar el token',
      data: err,
    });
  }
};

export default jwtVerify;
