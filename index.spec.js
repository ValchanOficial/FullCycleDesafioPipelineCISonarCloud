const assert = require('assert');
const { Soma, Subtracao, Multiplicacao, Divisao } = require('./index');
const { test } = require('node:test');

test('Teste de soma', () => {
    assert.strictEqual(Soma(1, 1), 2);
});

test('Teste de subtração', () => {
    assert.strictEqual(Subtracao(4, 1), 3);
});

test('Teste de multiplicação', () => {
    assert.strictEqual(Multiplicacao(4, 1), 4);
});

test('Teste de divisão', () => {
    assert.strictEqual(Divisao(5, 1), 5);
});