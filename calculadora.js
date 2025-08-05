function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    throw new Error("Divisor não pode ser zero");
  }
  return a / b;
}

function porcentagem(a,b){
    return (a/100) * b;
}

//------------------testes------------------
console.log("soma:")
console.log(null+3)
console.log(undefined+3)
console.log(3+null)
console.log(3+undefined)
console.log("\n")

console.log("subtração:")
console.log(null-4)
console.log(undefined-4)
console.log(10-null)
console.log(10-undefined)
console.log("\n")

console.log("multiplicação:")
console.log(null*3)
console.log(undefined*3)
console.log(3*null)
console.log(3*undefined)
console.log("\n")

console.log("divisão:")
console.log(null/3)
console.log(undefined/3)
console.log(3/undefined)
console.log(9/null)
console.log("\n")

console.log("porcentagem:")
console.log((100/100)*15)
console.log((null/100)*15)
console.log((undefined/100)*15)
console.log((100/100)*null)
console.log((100/undefined)*15)

module.exports = { somar, subtrair, multiplicar, dividir, porcentagem };

