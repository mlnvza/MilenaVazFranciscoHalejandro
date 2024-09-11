function exercicio() {
    const vetor = [12, 9, 437, 534, 29, 4, 57]
    const numero = parseInt(prompt("Digite um número"));
    let novo = vetor.filter(function (num) { return num > numero })
    alert(novo)
}