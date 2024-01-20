const firstCar = prompt("Qual é o primeiro carro?")
const velocity1 = parseFloat("Qual é a velocidade do primeiro carro?")
const secondCar = prompt("Qual é o primeiro carro?")     
const velocity2 = parseFloat("Qual é a velocidade do segundo carro?")

if(velocity1 > velocity2 ){
        alert("O porsante "+ firstCar + " é mais veloz")
    }else if(velocity1 == velocity2)
    {
        alert("O porsante "+ firstCar + " e o porsante " + secondCar + " são como um espelho.")
    } else  
    {
        alert("O porsante "+ secondCar + " é mais veloz")
    }

//Esse resultado só irá aparecer no console...