const fs = require('fs');

function lerDadosJSON() {
  const dados = fs.readFileSync('dados.json');
  return JSON.parse(dados);
}

function calcularFaturamento(dados) {
  let menorFaturamento = Infinity;
  let maiorFaturamento = -Infinity;
  let totalFaturamento = 0;
  let diasComFaturamento = 0;
  let diasSemFaturamento = 0;

  for (const item of dados) {
    const faturamento = item.valor;

    if (faturamento > 0) {
      totalFaturamento += faturamento;
      diasComFaturamento++;

      if (faturamento < menorFaturamento) {
        menorFaturamento = faturamento;
      }

      if (faturamento > maiorFaturamento) {
        maiorFaturamento = faturamento;
      }
    } else {
      diasSemFaturamento++;
    }
  }

  const mediaMensal = totalFaturamento / diasComFaturamento;

  let diasAcimaDaMedia = 0;
  for (const item of dados) {
    if (item.valor > mediaMensal) {
      diasAcimaDaMedia++;
    }
  }

  return {
    menorFaturamento,
    maiorFaturamento,
    diasAcimaDaMedia,
    mediaMensal,
    diasSemFaturamento
  };
}

const dados = lerDadosJSON();

const resultado = calcularFaturamento(dados);

console.log(`Menor faturamento: ${resultado.menorFaturamento}`);
console.log(`Maior faturamento: ${resultado.maiorFaturamento}`);
console.log(`Média mensal: ${resultado.mediaMensal.toFixed(2)}`);
console.log(`Número de dias com faturamento acima da média: ${resultado.diasAcimaDaMedia}`);
console.log(`Número de dias sem faturamento: ${resultado.diasSemFaturamento}`);


// Para executar o código, utilize o comando: node .\pergunta3.js
