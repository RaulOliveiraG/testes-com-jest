
const { somar, subtrair, multiplicar, dividir, porcentagem } = require('./calculadora');

//----------------soma----------------
test('deve somar dois números corretamente', () => {
  expect(somar(5, 3)).toBe(8);
});

test('deve somar dois números corretamente com negativo', () => {
  expect(somar(-5, -3)).toBe(-8);
});

test('deve somar dois números corretamente', () => {
  expect(somar(null, 3)).toBe(3);
});

test('deve somar dois números corretamente', () => {
  expect(somar(undefined, 3)).toBe(NaN);
});


//----------------subtração----------------
test('deve subtrair dois números corretamente', () => {
  expect(subtrair(10, 4)).toBe(6);
});

test('deve subtrair dois números corretamente com negativo', () => {
  expect(subtrair(10, -4)).toBe(14);
});

test('deve subtrair dois números corretamente', () => {
  expect(subtrair(null, 4)).toBe(-4);
});
test('deve subtrair dois números corretamente', () => {
  expect(subtrair(undefined, 4)).toBe(NaN);
});


//----------------multiplicação----------------
test('deve multiplicar dois números corretamente', () => {
  expect(multiplicar(4, 3)).toBe(12);
});

test('deve multiplicar dois números corretamente com negativo', () => {
  expect(multiplicar(4, -3)).toBe(-12);
});

test('deve multiplicar dois números corretamente', () => {
  expect(multiplicar(null, 3)).toBe(0);
});

test('deve multiplicar dois números corretamente', () => {
  expect(multiplicar(undefined, 3)).toBe(NaN);
});
test('deve multiplicar dois números corretamente', () => {
  expect(multiplicar(4, null)).toBe(0);
});

test('deve multiplicar dois números corretamente', () => {
  expect(multiplicar(4, undefined)).toBe(NaN);
});


//----------------divisão----------------
test('deve dividir dois números corretamente', () => {
  expect(dividir(9, 3)).toBe(3);
});

test('deve dividir dois números corretamente com negativo', () => {
  expect(dividir(9, -3)).toBe(-3);
});

test('deve dividir dois números corretamente', () => {
  expect(dividir(null, 3)).toBe(0);
});

test('deve dividir dois números corretamente', () => {
  expect(dividir(undefined, 3)).toBe(NaN);
});
test('deve dividir dois números corretamente', () => {
  expect(dividir(9, null)).toBe(Infinity);
});

test('deve dividir dois números corretamente', () => {
  expect(dividir(9, undefined)).toBe(NaN);
});

test('deve lançar erro ao dividir por zero', () => {
  expect(() => dividir(10, 0)).toThrow('Divisor não pode ser zero');
});

//----------------porcentagem----------------
test('deve calcular porcentagem corretamente', () => {
  expect(porcentagem(100, 15)).toBe(15);
});

test('deve calcular porcentagem corretamente', () => {
  expect(porcentagem(null, 15)).toBe(0);
});

test('deve calcular porcentagem corretamente', () => {
  expect(porcentagem(undefined, 15)).toBe(NaN);
});

test('deve calcular porcentagem corretamente', () => {
  expect(porcentagem(100, null)).toBe(0);
});

test('deve calcular porcentagem corretamente', () => {
  expect(porcentagem(undefined, 15)).toBe(NaN);
});