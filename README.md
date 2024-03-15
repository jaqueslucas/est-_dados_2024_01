
---

# Como Executar o Código TypeScript

Este guia explica como compilar e executar o código TypeScript fornecido.

## Pré-requisitos

Certifique-se de ter o Node.js e o TypeScript instalados em seu sistema. Você pode baixá-los nos seguintes links:

- Node.js: [Download Node.js](https://nodejs.org/)
- TypeScript: Execute o comando `npm install -g typescript` no terminal após instalar o Node.js.

## Passos para Execução

1. **Criação do Arquivo TypeScript:**
   - Clone o arquivo em algum repositório de seu computador de sua preferência utilizando o comando `git clone https://github.com/jaqueslucas/est-_dados_2024_01.git`.

2. **Compilação do Código TypeScript:**
   - Abra o terminal (ou prompt de comando) e navegue até o diretório onde você salvou o arquivo `.ts`.
   - Execute o comando abaixo para compilar o código TypeScript em JavaScript:
     ```
     tsc fibonacci.ts
     ```

3. **Execução do Código JavaScript:**
   - Após a compilação bem-sucedida, um arquivo `fibonacci.js` será gerado no mesmo diretório.
   - No terminal, execute o comando abaixo para executar o código JavaScript:
     ```
     node fibonacci.js
     ```

## Resultados

Ao executar o código, os resultados do algoritmo de Fibonacci para um valor específico de `n` serão exibidos no terminal.

---
