function jurosSimples(cap, taxa, tem){

    const juros = cap * taxa + tem;
    const montante = juros + cap;
    return  montante
}

function jurosCompostos(cap, taxa, tem){

    const montante = cap*(Math.pow(1+taxa, tem))
    return montante
}

let res = jurosSimples(1000, 0.10, 24)
console.log(res)

let res2 = jurosCompostos(1000, 0.10, 2)
console.log(res2)