//# Exercício 1

//Crie um array vazio chamado `sacolao`, e siga os passos abaixo:

/*a) Crie três objetos que vão representar frutas do sacolão. 
Os objetos devem ter as seguintes propriedades:*/

/*```jsx
nome: string;
preco: number;
disponibilidade: boolean;*/

const sacolao = []

const fruta1 = {
    nome: "Melancia",
    preco: 4.99,
    disponibilidade: true
}

const fruta2 = {
    nome: "Laranja",
    preco: 3.99,
    disponibilidade: false
}

const fruta3 = {
    nome: "Uva",
    preco: 5.99,
    disponibilidade: true
}

//b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**

sacolao.push(fruta1, fruta2, fruta3)


/*c) Imprima a o array `sacolao`, e certifique-se de que agora ela seja um array 
**com três objetos**/

console.log(sacolao)