//Operadores Aritméticos => *, /, -, +, % (modulo oparator), ** (Operador de exponenciação )

const numero01 = 40;
const numero02 = 2;
const resultadoSoma = numero01 + numero02;
const resultadoSub = numero01 - numero02;
const resultadoMult = numero01 * numero02;

console.log(
  `Os números da operação são: ${numero01} e o segundo número é: ${numero02}`
);
console.log(`A soma dos dois números é de: ${resultadoSoma}`);
console.log(`A subtração dos dois números é de: ${resultadoSub}`);
console.log(`A multiplicação dos dois números é de: ${resultadoMult}`);
console.log(`A divisão dos dois números é de: ${numero01 / numero02}`);
console.log(`O resto da divisão dos dois números é de: ${numero01 % numero02}`);
console.log(`O número 01 elevado à potência do número 02 é de: ${numero01 ** numero02}`);

