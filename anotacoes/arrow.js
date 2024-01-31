//fuction normal 
function soma (a, b) {
    return a+b
}

console.log(`Soma normal: ${soma(7, 7)}`)

//arrow fuction
const arrowSum = (a, b) => {
    return a + b
  }
  
  console.log(`Soma arrow function: ${arrowSum(2, 2)}`)

//uma arrow direta sem precisar de paramentro
const double = n => `O dobro de ${n} é ${n * 2}`

const number = 21
console.log(`Dobro: ${double(number)}`)

