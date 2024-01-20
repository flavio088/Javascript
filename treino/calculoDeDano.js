const player = prompt("Insira o nome do seu personagem: ")
let hp = parseFloat(prompt("Insira seus pontos de vida: "))
const defensePoints = parseFloat(prompt("Insira seus pontos de defesa: "))
const attack = parseFloat(prompt("Insira o valor do poder de ataque recebido: "))
const shield = prompt ("Você possui escudo ? Sim/Não")

let damage = 0;

if(attack > defensePoints && shield === "Não") {
    damage = attack-defensePoints
}else if(attack > defensePoints && shield === "Sim") {
    damage = (attack-defensePoints) / 2
}

hp -= damage

alert(`O ${player} recebeu: ${damage}\n${player}\nEstá com: ${hp} de pontos de vida \nPoder de defesa: ${defensePoints}\nPossui escudo: ${shield}`
)