/* eslint-disable camelcase */
import Anime from '../model/animes.model.js';

export const getAnimes = async (req, res) => {
  try {
    const animes = await Anime.findAll();
    if (animes.length === 0) {
      return res.status(404).json({
        message: 'No existen animes',
        data: [],
      });
    }
    return res.status(201).json({
      message: 'Lista de todos los Animes',
      data: animes,
    });
  } catch (err) {
    return res.status(404).json({
      message: 'Ocurrio un error al listar los animes',
      data: err,
    });
  }
};
export const getAnimeById = async (req, res) => {
  const { id } = req.params;
  if (!(id > 0)) {
    return res.status(400).json({
      message: 'Ingrese el id a buscar',
      data: [],
    });
  }
  try {
    const anime = await Anime.findByPk(id);
    if (anime === null) {
      return res.status(404).json({
        message: 'El anime no existe',
        data: [],
      });
    }
    return res.status(201).json({
      message: 'Anime encontrado',
      data: anime,
    });
  } catch (err) {
    return res.status(404).json({
      message: 'Ocurrio un error al buscar el anime',
      data: err,
    });
  }
};
export const createAnime = async (req, res) => {
  const {
    nombre,
    descripcion,
    visto,
    favorito,
    url_img,
    calificacion,
    lista_id,
  } = req.body;
  if (!nombre || !url_img || !calificacion)
    return res
      .status(400)
      .json({ message: 'Complete todos los campos', data: [] });
  try {
    const anime = await Anime.create({
      nombre,
      descripcion,
      visto,
      favorito,
      url_img,
      calificacion,
      user_Id: req.id,
    });
    anime.setTipos(lista_id);
    return res.status(201).json({
      message: 'Anime creado correctamente',
      data: anime,
    });
  } catch (err) {
    return res.status(404).json({
      message: 'Ocurrio un error al crear el anime',
      data: err,
    });
  }
};
export const updateAnime = async (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion, visto, favorito, url_img, calificacion } =
    req.body;
  if (
    !(id > 0) ||
    !nombre ||
    !descripcion ||
    !visto ||
    !favorito ||
    !url_img ||
    !calificacion
  )
    return res
      .status(400)
      .json({ message: 'Complete todos los campos', data: [] });
  try {
    const anime = await Anime.update(
      { nombre, descripcion, visto, favorito, url_img, calificacion },
      { where: { id, user_Id: req.id } }
    );
    return res.status(201).json({
      message: 'Anime actualizado correctamente',
      data: anime,
    });
  } catch (err) {
    return res.status(404).json({
      message: 'Ocurrio un error al actualizar el anime',
      data: err,
    });
  }
};
export const deleteAnime = async (req, res) => {
  const { id } = req.params;
  if (!id)
    return res
      .status(400)
      .json({ message: 'Complete todos los campos', data: [] });
  try {
    const anime = await Anime.destroy({ where: { id, user_Id: req.id } });
    return res.status(201).json({
      message: 'Anime eliminado correctamente',
      data: anime,
    });
  } catch (err) {
    return res.status(404).json({
      message: 'Ocurrio un error al eliminar el anime',
      data: err,
    });
  }
};

// Funciones para cada usuario

export const getAnimeByUser = async (req, res) => {
  const { id } = req;
  if (!(id > 0)) {
    return res.status(400).json({
      message: 'Ingrese el id a buscar',
      data: [],
    });
  }
  try {
    const anime = await Anime.findAll({ where: { user_Id: req.id } });
    if (anime === null) {
      return res.status(404).json({
        message: 'El anime no existe',
        data: [],
      });
    }
    return res.status(201).json({
      message: 'Anime encontrado',
      data: anime,
    });
  } catch (err) {
    return res.status(404).json({
      message: 'Ocurrio un error al buscar el anime',
      data: err,
    });
  }
};

export const getAnimeVistos = async (req, res) => {
  try {
    const anime = await Anime.findAll({
      where: { visto: 'SI', user_Id: req.id },
    });
    if (anime.length === 0) {
      return res.status(404).json({
        message: 'No tienes animes vistos',
        data: [],
      });
    }
    return res.status(201).json({
      message: 'Lista de anime vistos',
      data: anime,
    });
  } catch (err) {
    return res.status(404).json({
      message: 'Ocurrio un error al buscar animes vistos',
      data: err,
    });
  }
};

export const getAnimesByFavoritos = async (req, res) => {
  try {
    const anime = await Anime.findAll({
      where: { favorito: 'SI', user_Id: req.id },
    });
    if (anime.length === 0) {
      return res.status(404).json({
        message: 'No tienes animes favoritos',
        data: [],
      });
    }
    return res.status(201).json({
      message: 'Lista de animes favoritos',
      data: anime,
    });
  } catch (err) {
    return res.status(404).json({
      message: 'Ocurrio un error al buscar el anime',
      data: err,
    });
  }
};
