import Tipo from '../model/tipo.model.js';

export const getTipo = async (req, res) => {
  try {
    const tipos = await Tipo.findAll();
    if (tipos.length === 0) {
      return res.status(404).json({
        message: 'No existen tipos de animes',
        data: [],
      });
    }
    return res.status(201).json({
      message: 'Lista de todos los Tipos de animes',
      data: tipos,
    });
  } catch (err) {
    return res.status(404).json({
      message: 'Ocurrio un error al listar los Tipos de animes',
      data: err,
    });
  }
};

export const getTipoById = async (req, res) => {
  const { id } = req.params;
  if (!(id > 0)) {
    return res.status(400).json({
      message: 'Ingrese el id a buscar',
      data: [],
    });
  }
  try {
    const tipo = await Tipo.findByPk(id);
    if (tipo === null) {
      return res.status(404).json({
        message: 'El tipo de anime no existe',
        data: [],
      });
    }
    return res.status(201).json({
      message: 'Tipo de anime encontrado',
      data: tipo,
    });
  } catch (err) {
    return res.status(404).json({
      message: 'Ocurrio un error al buscar el Tipo de anime',
      data: err,
    });
  }
};

export const createTipo = async (req, res) => {
  const { nombre } = req.body;
  if (!nombre)
    return res
      .status(400)
      .json({ message: 'Complete todos los campos', data: [] });
  try {
    const tipo = await Tipo.create({ nombre });
    return res.status(201).json({
      message: 'Tipo de anime creado correctamente',
      data: tipo,
    });
  } catch (err) {
    return res.status(404).json({
      message: 'Ocurrio un error al crear el Tipo de anime',
      data: err,
    });
  }
};

export const updateTipo = async (req, res) => {
  const { id } = req.params;
  const { nombre } = req.body;
  if (!id || !nombre)
    return res
      .status(400)
      .json({ message: 'Complete todos los campos', data: [] });
  try {
    const tipo = await Tipo.update({ nombre }, { where: { id } });
    return res.status(201).json({
      message: 'Tipo de anime actualizado correctamente',
      data: tipo,
    });
  } catch (err) {
    return res.status(404).json({
      message: 'Ocurrio un error al actualizar el Tipo de anime',
      data: err,
    });
  }
};

export const deleteTipo = async (req, res) => {
  const { id } = req.params;
  if (!id)
    return res
      .status(400)
      .json({ message: 'Complete todos los campos', data: [] });
  try {
    const tipo = await Tipo.destroy({
      where: { id },
    });
    return res.status(201).json({
      message: 'Tipo de anime eliminado correctamente',
      data: tipo,
    });
  } catch (err) {
    return res.status(404).json({
      message: 'Ocurrio un error al eliminar el Tipo de anime',
      data: err,
    });
  }
};
