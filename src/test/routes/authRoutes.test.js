import request from 'supertest';
import {
  afterEach, beforeEach, describe, it,
} from '@jest/globals';
import app from '../../app';

let server;
beforeEach(() => {
  const port = 3000;
  server = app.listen(port);
});

afterEach((done) => {
  server.close(done);
});

describe('POST em /login', () => {
  it('o login deve possuir um email e senha pra se autenticar', async () => {
    // Arrange
    const loginMock = {
      email: 'artemis@teste.com',
    };

    await request(server)
      .post('/login')
      .send(loginMock)
      .expect(500)
      .expect('"A senha de usuario é obrigatório."');
  });
});
