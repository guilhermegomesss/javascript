// Criando um array e descobrindo o seu tipo de dado :


const arr = [1,2,3]

console.log(typeof(arr))




// Propriedades  
// acessando propriedades de um array
const numbers = [1,2,3,4,5,6]

console.log(numbers.length) // descobrir o tamanho do array 
console.log(numbers["length"]) // Acessar o tamanho do array

console.log(numbers)


const nome = "Guilherme"
console.log(nome)
console.log(nome.length)
console.log(nome["length"])

// Métodos 

// Usando métodos para concatenar arrays
const nomes = [1,2,3,4,5,6]
const nomes2 = [1,2,3]
const todosNomes = nomes.concat(nomes2)

console.log(todosNomes)
// Método para deixar todos os textos em maiúsculo 
 const meuNome = 'Guilherme Augusto Gomes'
console.log(meuNome.toUpperCase())

// Método para deixar todos os textos em minúsculo 
console.log(meuNome.toLowerCase())

// Método para descobrir a posição de um caracter em uma string

console.log(meuNome.indexOf("o"))

