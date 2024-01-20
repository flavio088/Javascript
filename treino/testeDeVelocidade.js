const firstCar = prompt("Qual é o primeiro carro?")
const secondCar = prompt("Qual é o primeiro carro?")     
const velocity1 = prompt("Qual é a velocidade do primeiro carro?")
const velocity2 = prompt("Qual é a velocidade do segundo carro?")

let speed;

if(velocity1 > velocity2 ){
        console.log("O porsante "+ firstCar + " é mais veloz")
    }else if(velocity1 == velocity2)
    {
        console.log("O porsante "+ firstCar + " e o porsante " + secondCar + " são como um espelho.")
    } else  
    {
        console.log("O porsante "+ secondCar + " é mais veloz")
    }

//Esse resultado só irá aparecer no console...