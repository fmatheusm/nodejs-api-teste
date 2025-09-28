import { describe, expect } from '@jest/globals';
import AluguelLivroService from '../../services/aluguelLivroService';

const aluguelLivroService = new AluguelLivroService();

describe('Testando AluguelLivroService', () => {
  it('Retornar a data de devolução do livro validando a quantidade de dias alugados', async () => {
    const dataAlugado = new Date('2025-09-28');
    const numeroDiasAlugados = 5;
    const dataDevolucaoEsperada = new Date('2025-10-03');

    const dataDevolucao = await aluguelLivroService.calcularDataDevolucao(
      dataAlugado,
      numeroDiasAlugados,
    );

    expect(dataDevolucao).toStrictEqual(dataDevolucaoEsperada);
  });
});
