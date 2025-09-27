import { describe, expect } from '@jest/globals';
import AuthService from '../../services/authService';

const authService = new AuthService();

describe('Testando a authService.cadastrarUsuario', () => {
  it('O usuario deve possuir um nome, email e senha', async () => {
    // Arrange
    const usuarioMock = {
      nome: 'Andromeda',
      email: 'andromeda@teste.com',
    };
    // ACT
    const usuarioSalvo = authService.cadastrarUsuario(usuarioMock);
    // Assert
    await expect(usuarioSalvo).rejects.toThrowError('A senha de usuário é obrigatória!');
  });
});

/*
Arrange: Prepara o ambiente e os dados necessários para o teste.
Act: Executa a ação que está sendo testada.
Assert: Verifica se o resultado da ação é o esperado.
*/
