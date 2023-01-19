import app from '../src/app.js';
import request from 'supertest';

test('Testeando el endpoint incial del api', async () => {
  const response = await request(app).get('/').expect(200);
  expect(response.body).toEqual({ message: 'Success' });
});
