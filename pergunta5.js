function inverterString(str) {
    let stringInvertida = '';
    
    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i];
    }
    
    return stringInvertida;
}

const input = process.argv.slice(2).join(' ');

if (input) {
    const resultado = inverterString(input);
    console.log('String invertida:', resultado);
} else {
    console.log('Por favor, forneça uma string como argumento.');
}


// Para executar o código, utilize o comando: node .\pergunta5.js <Escreva uma Palavra>
