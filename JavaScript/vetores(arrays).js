// arrays são como caixar com outras caixas(valores), que podem ser acessadas através do seu índice entre colchetes []. O primeiro índice sempre sempre começará com 0. Portanto um array com 4 posições terá um índice de 0 a 3 

// O array é heterogenio , ou seja, podemos colocar qualquer valor dentro dele, ou seja, tipos de dados diferentes. Int, Float, String, Object, boolean....

// realização do array: 
//             0          1           2
// const arr = ["leão", "tartaruga", "mamute"];

// arr[0] = "girafa";
// arr[3] = "macaco";
// arr[4] = 1025;
// arr[10] = "orangotango";

// console.log(arr);

// *****************Primeiro método - Push ***************/
// push - permite adicionar valores no final do array
// const pushArray = ['josé', 'maria', 'rodrigo', 'california']
// console.log(pushArray);

// pushArray[4] = "guilherme"
// console.log(pushArray);

// pushArray.push("Mariana");
// console.log(pushArray);

// pushArray.push("Monica")
// console.log(pushArray);

// //unshift - permite adicionar valores no inicio do array
// pushArray.unshift("cebolinha")
// console.log(pushArray);

// pushArray.unshift("teste", "magali")
// console.log(pushArray);

//*****************Segundo método - POP ***************/
//método responsável por excluir valores no final de um determinado array
// const popArray = ["Fernando", "Fernanda", "Eric", "Renata"]
// console.log(popArray);

// const popReturn = popArray.pop();
// console.log(popReturn);
// console.log(popArray);
// //-----------------------------------
// const shiftReturn = popArray.shift();
// console.log(shiftReturn);
// console.log(popArray);

//*****************Terceiro método - Splice ***************/
// //permitir selecionar um índice e remover e adicionar valores (substituição);
// const spliceArray = ['jan', 'fev', 'abr', 'jun'];
// console.log(spliceArray);

// spliceArray.splice(2, 0, "mar");
// console.log(spliceArray);

// spliceArray.splice(4, 0, "mai")
// console.log(spliceArray);

// spliceArray.push("Jul")
// console.log(spliceArray);

//*****************quarto método - filter ***************/
// const filterArray = ['Guilherme', 'Leticia', 'Leonardo', 'Cassio'];
// console.log(filterArray);

// let novoArrayNomeFiltrado = filterArray.filter((nome) => {
//     return nome == "guilherme";
// })

// if (novoArrayNomeFiltrado == "") {
//     novoArrayNomeFiltrado = "não encontrei nenhum nome"

//     console.log(novoArrayNomeFiltrado);
// } else {
//     console.log(novoArrayNomeFiltrado);
// }

//*****************quinto método - MAP ***************/
//Map não modigica o array original, somente a função de callback vai modificar o array origial e criará um novo array modificado

// const arrayMap = [1, 2, 3, 4, 5, "hello"];
// console.log(arrayMap);

// const arrayModificado = arrayMap.map((multiplicador) => {

//     return multiplicador * multiplicador;

// })

// console.log(arrayModificado);

//*****************sexto método - ForEach ***************/

const forEachArray = []
forEachArray.push({ nome: 'Guilherme', sobrenome: "Amorim", idade: 21, naturalidade: "Bahia" });
forEachArray.push({ nome: 'Manuel', sobrenome: "Gomes", idade: 61, naturalidade: "Não sei" });
console.log(forEachArray);

forEachArray.forEach((nomes) => {
    console.log(`nome: ${nomes.nome}, sobrenome ${nomes.sobrenome}, idade: ${nomes.idade}`);
});

//EXERCÍCIO - CRIE UM ARRAY QUE RECEBA NOMES (MIN 5 NOMES)
//CRIE UM SEGUNDO ARRAY QUE RECEBA SOBRENOMES (MIN 5 SOBRENOMES)
//UTILIZE MÉTODOS DE ARRAYS PARA EXIBIR OS DOIS ARRAYS EM UM SÓ, RETORNANDO O NOME E O SOBRENOME DA PESSOA DE ACORDO COM SEUS ÍNDICES
