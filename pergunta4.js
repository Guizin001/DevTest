const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
  };
  
  const totalFaturamento = Object.values(faturamentoPorEstado).reduce((acc, valor) => acc + valor, 0);
  
  const percentualPorEstado = Object.entries(faturamentoPorEstado).map(([estado, faturamento]) => {
    const percentual = (faturamento / totalFaturamento) * 100;
    return { estado, percentual: percentual.toFixed(2) }; // Armazenando com 2 casas decimais
  });
  
  percentualPorEstado.forEach(item => {
    console.log(`Estado: ${item.estado} - Percentual de representação: ${item.percentual}%`);
  });


// Para executar o código, utilize o comando: node pergunta4.js