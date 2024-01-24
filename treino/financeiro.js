let saldo = parseFloat(prompt("Informe a quantidade de dinheiro inicial:"))
let opcao = ""

do {
  opcao = prompt(
    "Saldo disponível: R$ " + saldo +
    "\n1 - Adicionar dinheiro" +
    "\n2 - Remover dinheiro" +
    "\n3 - Sair"
  )

switch (key) {
        case "1":
        saldo += parseFloat(prompt("Qual valor deseja depositar ? "))
        break;
        case "2":
        saldo -= prompt("Quanto deseja sacar ? ")
        break;
        case "3":
        alert("Saindo...")
        break;
        default:
            alert("Entrada inválida.")
            break
        }
} while (opcao !== "3");

