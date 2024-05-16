function baspon(pontuacoes) {
    const pontList = pontuacoes.split(' ').map(Number); // Converte a string em um array de números
    let recordeAtual = pontList[0];
    let piorPontuacao = pontList[0];
    let recordeBatido = 0;
    let jogoPiorPontuacao = 0;

    for (let i = 1; i < pontList.length; i++) {
        if (pontList[i] > recordeAtual) {
            recordeAtual = pontList[i];
            recordeBatido++;
        } else if (pontList[i] < piorPontuacao) {
            piorPontuacao = pontList[i];
            jogoPiorPontuacao = i;
        }
    }

    return [recordeBatido, jogoPiorPontuacao + 1];
}

// Exemplo de uso:
const pontuacoes = "10 7 20 8 25 30 12 35 1";
const res = baspon(pontuacoes);
console.log(res);
