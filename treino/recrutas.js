const primeiroNome = prompt("Informe o primeiro nome ? ")
const sobrenome = prompt("informe o segundo nome ? ")
const campoDeEstudo = prompt("Qual é o campo de estudo ? ")
const anoDeNascimento = prompt("Qual é o ano de nascimento ?")

alert(
    "Recruta cadastrado com sucesso! \n" +
    "\nNome completo: " + primeiroNome + " " + sobrenome +
    "\nCampo de estudo: " + campoDeEstudo +
    "\nIdade: " + (2023 - anoDeNascimento) 
)