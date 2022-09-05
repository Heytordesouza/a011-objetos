/*# Exercício 3

Observe o objeto abaixo e, utilizando o **espalhamento** resolva os exercícios a seguir:

```jsx*/
const pokemon = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}

/* a) Crie uma cópia do objeto, acima, mantendo a estrutura, 
mas trocando **`nome`** por “Squirtle” e **`tipo`** por “Água” */
const pokemonCopia = {
    ...pokemon,
    nome: "Squirtle",
    tipo: "Água"
}

/*b) No objeto original, adicione mais uma propriedade, chamada `ataques`. 
Esta propriedade deve guardar um **array** de objetos com a estrutura abaixo. 
Inicie a propriedade como um array vazio, e crie o objeto abaixo utilizando `**push()**`

```text
nome: Investida;
dano: 40;
tipo: Normal;
precisao: 100;*/

pokemon.ataques = []

const ataques2 = {
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100
}

pokemon.ataques.push(ataques2)


/*c) Na cópia do objeto original, adicione a propriedade **`ataques`** 
a partir do **espalhamento** da propriedade criada para o objeto original;*/
pokemonCopia2 = {
    ...pokemonCopia,
    ataques: [ataques2]
}


/*d) para o objeto original, adicione o ataque **“Folha Navalha”,** com **45 de dano**,
 **100 de precisão**, e de tipo **“Grama”**;*/
const pokemon2 = {
    ...pokemon,
    ataques: {
        nome: "Folha Navalha",
        dano: 45,
        tipo: "Grama",
        precisao: 100
    }
}


/*e) para a cópia, crie o ataque **“Jato de Água”**, com **40 de dano**, 
**100 de precisão**, e do tipo **“Água”**;*/
const pokemonCopia3 = {
    ...pokemonCopia2,
    ataques: {
        nome: "Jato de Água",
        dano: 40,
        tipo: "Água",
        precisao: 100
    }
}


/*f) Imprima os dois objetos no console.*/

console.log(pokemon2)
console.log(pokemonCopia3)