const readLine = require('readline').createInterface({
   input: process.stdin,
   output: process.stdout
});

console.log('Esse programa vai checar se você é maior de idade');

readLine.question('Qual seu ano de nascimento?', ano=>{
   if(ano >2006){
      console.log('voce nao tem 18 anos');
      return;
   }
});