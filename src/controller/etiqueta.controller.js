import Etiqueta from '../model/etiquetas.model.js';

export const getEtiqueta = async (req, res) => {
  try {
    const etiquetas = await Etiqueta.findAll();
    if (etiquetas.length === 0) {
      return res.status(404).json({
        message: 'No existen Etiquetas',
        data: [],
      });
    }
    return res.status(201).json({
      message: 'Lista de todos las Etiquetas',
      data: etiquetas,
    });
  } catch (err) {
    return res.status(404).json({
      message: 'Ocurrio un error al listar las Etiquetas',
      data: err,
    });
  }
};
export const getEtiquetaById = async (req, res) => {
  const { id } = req.params;
  if (!(id > 0)) {
    return res.status(400).json({
      message: 'Ingrese el id a buscar',
      data: [],
    });
  }
  try {
    const etiqueta = await Etiqueta.findByPk(id);
    if (etiqueta === null) {
      return res.status(404).json({
        message: 'La etiqueta no existe',
        data: [],
      });
    }
    return res.status(201).json({
      message: 'Etiqueta encontrada',
      data: etiqueta,
    });
  } catch (err) {
    return res.status(404).json({
      message: 'Ocurrio un error encontrar la etiqueta',
      data: err,
    });
  }
};
export const createEtiqueta = async (req, res) => {
  const { nombre } = req.body;
  if (!nombre)
    return res
      .status(400)
      .json({ message: 'Complete todos los campos', data: [] });
  try {
    const etiqueta = await Etiqueta.create({ nombre });
    return res.status(201).json({
      message: 'Etiqueta creada correctamente',
      data: etiqueta,
    });
  } catch (err) {
    return res.status(404).json({
      message: 'Ocurrio un error alcrear la Etiqueta',
      data: err,
    });
  }
};
export const updateEtiqueta = async (req, res) => {
  const { id } = req.params;
  const { nombre } = req.body;
  if (!id || !nombre)
    return res
      .status(400)
      .json({ message: 'Complete todos los campos', data: [] });
  try {
    const etiqueta = await Etiqueta.update({ nombre }, { where: { id } });
    return res.status(201).json({
      message: 'Etiqueta actualizada correctamente',
      data: etiqueta,
    });
  } catch (err) {
    return res.status(404).json({
      message: 'Ocurrio un error al actualizar la Etiqueta',
      data: err,
    });
  }
};
export const deleteEtiqueta = async (req, res) => {
  const { id } = req.params;
  if (!id)
    return res
      .status(400)
      .json({ message: 'Complete todos los campos', data: [] });
  try {
    const etiqueta = await Etiqueta.destroy({
      where: { id },
    });
    return res.status(201).json({
      message: 'Etiqueta eliminada correctamente',
      data: etiqueta,
    });
  } catch (err) {
    return res.status(404).json({
      message: 'Ocurrio un error al listar los Tipos de animes',
      data: err,
    });
  }
};
