const fila = [];

let opcao = ""

do {
   opcao=prompt("Bem Vindo ao Hospital\n 1 - Novo paciente\n 2 - Consultar paciente\n 3 - Verificar fila\n 4 - Encerrar atendimento")

    switch (opcao) {
        case "1":
            const nomePaciente = prompt("Informe o nome do paciente:");
            fila.push(nomePaciente);
            break;
        case "2":
            if (fila.length > 0) {
                const pacienteRemovido = fila.shift();
                alert(`Paciente ${pacienteRemovido} foi atendido e removido da fila.`);
            } else {
                alert("Não há pacientes na fila para consulta.");
            }
            break;
         case "3": 
            alert(`Fila de Pacientes:\n${fila}`);
            break;
        case "4":
            alert("Atendimento encerrado.")
            
        default:
            alert("Opção Inválida")
            break;
    }

} while (opcao !== "4");

