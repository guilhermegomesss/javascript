// Funções :
// Criando uma Função :

function minhaPrimeiraFuncao(){
    console.log("Pronto Criei Minha primeira função")
}

minhaPrimeiraFuncao()

// criando Funções dentro de uma variável :

const primeiraFuncao  = function (){
    console.log("Função dentro de uma variável")
}
primeiraFuncao()


// Arrow Functions :

const minhaPrimeiraArrowFunction = () => {
    console.log("Minha Primeira Arrow Funcion Criada ")
}
minhaPrimeiraArrowFunction()


// Testando se um número é impar ou par com arrow Function :

const testandoNumeros = (numero) => {
    if (numero % 2 === 0 ) {
      console.log("O número é par")
      return
  
    }
    else {
        console.log("O número é impar")
        return
    }

}

testandoNumeros(2)








