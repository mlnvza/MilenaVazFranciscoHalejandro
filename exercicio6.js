function exercicio() {
    let numero = Math.round(Math.random() * 10);
    let resposta = "";
    do {
        resposta = parseInt(prompt("Tente adivinhar o número aleatório"));
    }
    while (resposta !== numero)
    alert("Parabéns! Você acertou!")
}