// Laço de repetição :


// While ( Enquanto)
let i = 1

while (i<10) {
    console.log(i)
    i++
}



// do while ( Faça enquanto)

i = 0
do {
    console.log(i)
    i++
}while(i<10)




// for

for(let i = 0; i < 10 ; i++){
    console.log(i)
}


// forEach
// Callback : É uma função que você vai passar para alguma coisa e essa função vai te retornar alguma outra coisa
let b = ['a','b'].forEach(function(atoa){
    console.log(atoa)
})


// for...in
let a = [10,20,30,40,50]
// Ele me retornou a posição dos elementos do array 
for(n in a){
    console.log(n)
}

// for of
a = [10,50,30]
// Ele me retornou os elementos que eu tenho no array
for (valor of a){
    console.log(valor)
}
