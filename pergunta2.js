function Fibonacci(numero) {
    let a = 0;
    let b = 1;

    if (numero === 0 || numero === 1) {
        return true;
    }

    while (b < numero) {
        let temp = a + b;
        a = b;
        b = temp;
    }

    return b === numero;
}

const numero = parseInt(process.argv[2]);

if (isNaN(numero)) {
    console.log("Por favor, informe um número válido.");
} else {
    if (Fibonacci(numero)) {
        console.log(`${numero} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`${numero} não pertence à sequência de Fibonacci.`);
    }
}


//Para executar o código, utilize o comando: node .\pergunta2.js <numero>
