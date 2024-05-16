function rever(n1) {

    const valoralterado = Number(Math.round(n1 + 'e2') + 'e-2');
    const formatarMoeda = valoralterado.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    return formatarMoeda;
}

// Exemplo de uso:
let res = rever(1.493432) 
console.log(res)
