/* eslint-disable no-undef */
import request from 'supertest';
import app from '../src/app.js';

const api = request(app);

describe('Test para el metodo getPendientes', () => {
  test('Comprobando que la respuesta sea la lista de usuarios', async () => {
    const response = await api
      .get('/api/v1/pendientes')
      .expect(201)
      .expect('Content-Type', 'application/json; charset=utf-8');
    expect(response.body.message).toEqual('Lista de todos los Pendientes');
  });

  /*   test('Comprobando que la respuesta sea que no existen pendientes', async () => {
    const response = await api
      .get('/api/v1/pendientes')
      .expect(404)
      .expect('Content-Type', 'application/json; charset=utf-8');
    expect(response.body).toEqual({
      message: 'No existen pendientes',
      data: [],
    });
  }); */
});
describe('Test para el metodo getPendienteById', () => {
  test('Comprobando que la respuesta sea ingrese en id a buscar cuando no se indica el id', async () => {
    const response = await api
      .get('/api/v1/pendientes/dwa')
      .expect(400)
      .expect('Content-Type', 'application/json; charset=utf-8');
    expect(response.body).toEqual({
      message: 'Ingrese el id a buscar',
      data: [],
    });
  });

  test('Comprobando que la respuesta el pendiente no existe', async () => {
    const response = await api
      .get('/api/v1/pendientes/10')
      .expect(404)
      .expect('Content-Type', 'application/json; charset=utf-8');
    expect(response.body).toEqual({
      message: 'El pendiente no existe',
      data: [],
    });
  });
  test('Comprobando que la respuesta el pendiente encontrado', async () => {
    const response = await api
      .get('/api/v1/pendientes/3')
      .expect(201)
      .expect('Content-Type', 'application/json; charset=utf-8');
    expect(response.body.message).toEqual('Pendiente encontrado');
  });
});
describe('Test para el metodo createPendiente', () => {
  test('Comprobando que la respuesta complete todos los campos cuando no se envia los datos solicitados', async () => {
    const response = await api
      .post('/api/v1/pendientes')
      .send()
      .expect(400)
      .expect('Content-Type', 'application/json; charset=utf-8');
    expect(response.body).toEqual({
      message: 'Complete todos los campos',
      data: [],
    });
  });
  test('Comprobando que la respuesta complete todos los campos cuando se enviand datos vacios', async () => {
    const response = await api
      .post('/api/v1/pendientes')
      .send({ nombre: '' })
      .expect(400)
      .expect('Content-Type', 'application/json; charset=utf-8');
    expect(response.body).toEqual({
      message: 'Complete todos los campos',
      data: [],
    });
  });
  test('Comprobando que la respuesta pendiente creado correctamente', async () => {
    const response = await api
      .post('/api/v1/pendientes')
      .send({ nombre: 'Onichan jajajw001w' })
      .expect(201)
      .expect('Content-Type', 'application/json; charset=utf-8');
    expect(response.body.message).toEqual('Pendiente creado correctamente');
  });
});
/* describe('Test para el metodo updatePendiente', async() => {});
describe('Test para el metodo deletePendiente', () => {});
 */
