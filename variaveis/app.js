const { read } = require('fs');

const readLine = require('readline').createInterface({
   input: process.stdin,
   output: process.stdout
});

const minhaPrimeiraConstateString = 'Minha primeira constante';
console.log(minhaPrimeiraConstateString);

let leituraDeCampo;
readLine.question('Informe sua idade:', input => {
   leituraDeCampo = input;
   console.log(`o usuário digitou: ${leituraDeCampo}`);

});
