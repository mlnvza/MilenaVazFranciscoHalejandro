function exercicio() {
    var numero = parseInt(prompt("Digite um número de 1 a 7 para obter um dia da semana correspondente:"))
    var diadasemana;
    switch (numero) {
        case 1:
            diadasemana = "Domingo";
            break
        case 2:
            diadasemana = "Segunda-Feira";
            break
        case 3:
            diadasemana = "Terça-Feira";
            break
        case 4:
            diadasemana = "Quarta-Feira"
            break
        case 5:
            diadasemana = "Quinta-Feira"
            break
        case 6:
            diadasemana = "Sexta-Feira"
            break
        case 7:
            diadasemana = "Sábado"
            break
        default:
            diadasemana = "Digito inválido"
            break
    }
    alert(diadasemana)
}