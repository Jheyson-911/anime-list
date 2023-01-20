import Pendiente from '../model/pendientes.model.js';

export const getPendientes = async (req, res) => {
  try {
    const pendientes = await Pendiente.findAll();
    if (pendientes.length === 0) {
      return res.status(404).json({
        message: 'No existen pendientes',
        data: [],
      });
    }
    return res.status(201).json({
      message: 'Lista de todos los Pendientes',
      data: pendientes,
    });
  } catch (err) {
    return res.status(404).json({
      message: 'Ocurrio un error al listar los pendientes',
      data: err,
    });
  }
};
export const getPendienteById = async (req, res) => {
  const { id } = req.params;
  if (!(id > 0)) {
    return res.status(400).json({
      message: 'Ingrese el id a buscar',
      data: [],
    });
  }
  try {
    const pendiente = await Pendiente.findByPk(id);
    if (pendiente === null) {
      return res.status(404).json({
        message: 'El pendiente no existe',
        data: [],
      });
    }
    return res.status(201).json({
      message: 'Pendiente encontrado',
      data: pendiente,
    });
  } catch (err) {
    return res.status(404).json({
      message: 'Ocurrio un error al buscar el pendiente',
      data: err,
    });
  }
};
export const createPendiente = async (req, res) => {
  const { nombre } = req.body;
  if (!nombre)
    return res
      .status(400)
      .json({ message: 'Complete todos los campos', data: [] });
  try {
    const pendiente = await Pendiente.create({ nombre, user_Id: req.id });
    return res.status(201).json({
      message: 'Pendiente creado correctamente',
      data: pendiente,
    });
  } catch (err) {
    return res.status(404).json({
      message: 'Ocurrio un error al crear el Pendiente',
      data: err,
    });
  }
};
export const updatePendiente = async (req, res) => {
  const { id } = req.params;
  const { nombre } = req.body;
  if (!id || !nombre)
    return res
      .status(400)
      .json({ message: 'Complete todos los campos', data: [] });
  try {
    const pendiente = await Pendiente.update(
      { nombre },
      { where: { id, user_Id: req.id } }
    );
    return res.status(201).json({
      message: 'Pendiente actualizado correctamente',
      data: pendiente,
    });
  } catch (err) {
    console.log(err);
    return res.status(404).json({
      message: 'Ocurrio un error al actualizar el Pendiente',
      data: err,
    });
  }
};
export const deletePendiente = async (req, res) => {
  const { id } = req.params;
  if (!id)
    return res
      .status(400)
      .json({ message: 'Complete todos los campos', data: [] });
  try {
    const pendiente = await Pendiente.destroy({
      where: { id, user_Id: req.id },
    });
    return res.status(201).json({
      message: 'Pendiente eliminaco correctamente',
      data: pendiente,
    });
  } catch (err) {
    return res.status(404).json({
      message: 'Ocurrio un error al eliminar el Pendiente',
      data: err,
    });
  }
};

// Funciones para cada usuario

export const getPendienteByUser = async (req, res) => {
  const { id } = req;
  if (!(id > 0)) {
    return res.status(400).json({
      message: 'Ingrese el id a buscar',
      data: [],
    });
  }
  try {
    const pendiente = await Pendiente.findAll({ where: { user_Id: id } });
    if (pendiente === null) {
      return res.status(404).json({
        message: 'El pendiente no existe',
        data: [],
      });
    }
    return res.status(201).json({
      message: 'Pendiente encontrado',
      data: pendiente,
    });
  } catch (err) {
    return res.status(404).json({
      message: 'Ocurrio un error al buscar el pendiente',
      data: err,
    });
  }
};
