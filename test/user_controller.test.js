/* eslint-disable no-undef */
import request from 'supertest';
import app from '../src/app.js';

const api = request(app);

describe('Test para el metodo register', () => {
  test('Comprobar la respuesta cuando no se envia ningun dato', async () => {
    const response = await api
      .post('/api/v1/register')
      .send()
      .expect(400)
      .expect('Content-Type', 'application/json; charset=utf-8');

    expect(response.body).toEqual({
      message: 'Complete todos los campos',
      data: [],
    });
  });

  test('Comprobar la respuesta cuando se envian campos vacios o no se envian campos requeridos', async () => {
    const response = await api
      .post('/api/v1/register')
      .send({
        email: '',
        password: '',
      })
      .expect(400)
      .expect('Content-Type', 'application/json; charset=utf-8');
    expect(response.body).toEqual({
      message: 'Complete todos los campos',
      data: [],
    });
  });

  test('Comprobar que el usuario sea unico', async () => {
    const response = await api
      .post('/api/v1/register')
      .send({ email: 'email@example.com', password: 'password' })
      .expect(400)
      .expect('Content-Type', 'application/json; charset=utf-8');
    expect(response.body).toEqual({
      message: 'Usuario ya existente',
      data: [],
    });
  });

  test('Comprobar las validaciones de sequelize al enviar un email no valido', async () => {
    const response = await api
      .post('/api/v1/register')
      .send({ email: 'email7@exampl', password: 'password' })
      .expect(404)
      .expect('Content-Type', 'application/json; charset=utf-8');
    expect(response.body.message).toBe('Ocurrio un error al crear el usuario');
  });
  // test('Comprobar la respuesta cuando es envian correctamente los datos', async () => {
  //   const response = await api
  //     .post('/api/v1/register')
  //     .send({ email: 'email7@example.com', password: 'password' })
  //     .expect(201)
  //     .expect('Content-Type', 'application/json; charset=utf-8');
  //   expect(response.body.message).toBe('Usuario creado correctamente');
  // });
});

describe('Test para el metodo login', () => {
  test('Comprobar la respuesta cuando no se envia ningun dato', async () => {
    const response = await api
      .post('/api/v1/login')
      .send()
      .expect(400)
      .expect('Content-Type', 'application/json; charset=utf-8');

    expect(response.body).toEqual({
      message: 'Complete todos los campos',
      data: [],
    });
  });

  test('Comprobar la respuesta cuando se envian campos vacios o no se envian campos requeridos', async () => {
    const response = await api
      .post('/api/v1/login')
      .send({
        email: '',
        password: '',
      })
      .expect(400)
      .expect('Content-Type', 'application/json; charset=utf-8');
    expect(response.body).toEqual({
      message: 'Complete todos los campos',
      data: [],
    });
  });

  test('Comprobar la respuesta cunado el email es incorrecto', async () => {
    const response = await api
      .post('/api/v1/login')
      .send({ email: 'fake@email.com', password: 'fakepassword' })
      .expect(404)
      .expect('Content-Type', 'application/json; charset=utf-8');
    expect(response.body).toEqual({ message: 'Email incorrecto', data: [] });
  });

  test('Comprobar la respuesta cuando la contraseña es incorrecta', async () => {
    const response = await api
      .post('/api/v1/login')
      .send({ email: 'email@example.com', password: 'fakepassword' })
      .expect(404)
      .expect('Content-Type', 'application/json; charset=utf-8');
    expect(response.body).toEqual({
      message: 'Contraseña incorrecta',
      data: [],
    });
  });

  test('Comprobar la respuesta cuando los datos son correctos', async () => {
    const response = await api
      .post('/api/v1/login')
      .send({ email: 'email@example.com', password: 'password' })
      .expect(201)
      .expect('Content-Type', 'application/json; charset=utf-8');
    expect(response.body.message).toEqual('Usuario logueado');
  });
});

describe('Testa pa el metodo getUser', () => {
  test('Devuelve el lista de usuarios en blanco', async () => {
    await api
      .get('/api/v1/users')
      .expect(201)
      .expect('Content-Type', 'application/json; charset=utf-8');
  });
});
