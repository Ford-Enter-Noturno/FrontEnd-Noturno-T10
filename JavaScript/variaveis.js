const variavelConst = 10;

let variavelLet = "Hello, World!";
var variavelVar = 10;

console.log(variavelLet);
console.log(variavelVar);

variavelLet = 10;
variavelVar = "10 + 4";

console.log(variavelConst);
console.log(variavelLet);
console.log(variavelVar);

//Padrão de escrita: camelCase(variáveis), PascalCase(Funções)

//declara variavel (let, var, const) - Identificador - Valor
let anoCarro = 2010;
let modeloCarro = "Sandero";
let marcaCarro = "Renault";
let corCarro = "Vermelho";
let chassiCarro = 12345678;

//Métodos utilizados para juntar variável com texto: Interpolação ou Concatenação

//concatenação
// console.log("Ano do carro: " + anoCarro + " Modelo do carro: " + modeloCarro);

//interpolação
console.log(
  `Ano do carro: ${anoCarro}, Modelo do carro: ${modeloCarro}, marca do carro: ${marcaCarro}, cor do carro: ${corCarro}, chassi: ${chassiCarro}`
);
