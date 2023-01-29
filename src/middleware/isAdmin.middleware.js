import User from '../model/user.model.js';

// eslint-disable-next-line consistent-return
const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { id: req.id } });
    if (user.rol !== 'ADMIN') {
      return res.status(404).json({
        message: 'No eres administrador',
        data: [],
      });
    }
    next();
  } catch (err) {
    return res.status(404).json({
      message: 'Ocurrio un error al validar el rol',
      data: err,
    });
  }
};
export default isAdmin;
