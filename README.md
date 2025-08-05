# Projeto Calculadora com Testes em Jest

Este é um projeto simples de uma **calculadora em JavaScript puro**, com foco em **boas práticas de testes unitários** utilizando o **Jest**.

## Funcionalidades

A calculadora implementa as seguintes operações matemáticas:

- Soma
- Subtração
- Multiplicação
- Divisão (com tratamento para divisão por zero)
- Porcentagem

## 📁 Estrutura do Projeto

calculadora/
├── calculadora.js # Funções da calculadora
├── calculadora.test.js # Testes unitários com Jest
├── package.json
└── README.md

markdown
Copiar
Editar

## 🛠️ Pré-requisitos

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes do Node)

## 🚀 Como executar os testes

1. **Clone o repositório:**

```bash
git clone https://github.com/seu-usuario/calculadora.git
cd calculadora
npm install
```

##Rode os testes com o Jest:
npx jest
npm test

✅ O que está sendo testado
Casos normais com números positivos e negativos
Operações com null e undefined
Erro esperado ao dividir por zero
Precisão nas operações de porcentagem

💡 Observações
Valores como null e undefined têm comportamentos específicos em JavaScript, e os testes validam isso.
O código está estruturado para ser facilmente expandido com novas funcionalidades.

Feito para fins de aprendizado e testes!

