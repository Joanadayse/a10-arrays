let numeros = [3 ,9,5 ,1]
let palavras = ["amor" , "carinho" ,"paz" , "sorte"]
let diversos = [2 , "matheus" , false]

// Adicione um item `number` ao primeiro array.
let numerosCopia = numeros.slice()
numerosCopia.push(2)
 console.log("numeros antes:" ,numeros) //[3, 9, 5, 1]
console.log("numeros depois:" ,numerosCopia) //[3, 9, 5, 1, 2]

// Remova o último item do segundo array.
let palavrasCopia = palavras.slice()
palavrasCopia.pop()

console.log("palavras antes:" ,palavras) //['amor', 'carinho', 'paz', 'sorte']
console.log("palavras depois:" ,palavrasCopia) //['amor', 'carinho', 'paz']

//Remova o segundo item do terceiro array.
let copiaDiversos= diversos.slice()
copiaDiversos.splice(1,1)

console.log("diversos antes:" , diversos) // [2, 'matheus', false]
console.log("diversos depois:" ,copiaDiversos)// [2, false]


