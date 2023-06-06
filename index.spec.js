import 'jest';
import { Divisao, Multiplicacao, Soma, Subtracao } from './index.js';

describe('Calculadora', () => {
    test('Teste de soma', () => {
        expect(Soma(1, 1)).toBe(2);
    });
    
    test('Teste de subtração', () => {
        expect(Subtracao(4, 1)).toBe(3);
    });
    
    test('Teste de multiplicação', () => {
        expect(Multiplicacao(4, 1)).toBe(4);
    });
    
    test('Teste de divisão', () => {
        expect(Divisao(5, 1)).toBe(5);
    });
});