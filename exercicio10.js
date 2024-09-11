function exercicio() {
    const palavras = ['sol', 'lua', 'estrela', 'mar', 'montanha', 'areia', 'floresta', 'rio', 'nuvem', 'sol', 'vento', 'areia'];
    const palavraEspecifica = prompt("Digite uma palavra aleatoria")
    let contagem = 0;
    palavras.forEach(function (palavra) {
        if (palavraEspecifica === palavra) {
            contagem++
        }

    })
    alert("A palavra se repete " + contagem + " vezes")
}