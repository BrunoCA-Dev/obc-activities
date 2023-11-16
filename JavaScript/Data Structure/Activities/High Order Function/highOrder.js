// Functions that can be used as parameters on other functions

function calculate(a,b,operation) {
    console.log("Realizing an operation")
    const result = operation(a,b)
    return result
}

function addition(x,y) {
    console.log("Realizing an addition")
    return x + y
}

calculate(3,5, addition)

// Essas funções que são passadas como parâmetros geralmente são chamadas de callbacks
// Um exemplo comum de high-order function no javascript é a função .forEach() dos arrays
function exibirElemento(elemento, indice, array) {
    console.log({
      elemento,
      indice,
      array
    })
  }
  
  const lista = ["Maçã", "Banana", "Laranja", "Limão", "Uva"]
  // Forma tradicional
  for (let i = 0; i < lista.length; i++) {
    exibirElemento(lista[i], i, lista)
  }
  // Forma funcional
  lista.forEach(exibirElemento)
  // Também poderia ser feito:
  lista.forEach(function (elemento, indice, array) {
    console.log({
      elemento,
      indice,
      array
    })
  })