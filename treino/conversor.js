let continuar = true;

while (continuar) {
    const metros = parseFloat(prompt("Informe um valor em metros: "));
    const medida = prompt("Em que medida? mm/cm/dm/dam/hm/km ");


switch (medida) {
    case "mm":
        alert("Em milimetro: " + metros * 1000)
        break;
    case "cm":
        alert("Em centimetros: " + metros * 100)
        break;
     case "dm":
        alert("Em decímetro : " + metros * 10)
        break;
    case "dam":
        alert("Em decâmetro : " + metros / 10)
        break;
    case "hm":
        alert("Em hectômetro : " + metros / 100)
        break;
    case "km":
        alert("Em quilômetro : " + metros / 1000)
        break;
    default:
         alert("Opção inválida!")
         break
}
const resposta = prompt("Deseja converter outro valor? (S/N)").toUpperCase();
if (resposta !== "S") {
    continuar = false;
}
}

//aqui  eu fiz uma atividade de switch, porém acrescentei um while e um if para que o prompt repita até o úsuario deseje sair 