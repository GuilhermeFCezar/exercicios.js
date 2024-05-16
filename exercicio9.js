function Apro(nota){
    if(nota < 38){

    return 'reprovado'
    }
    const multcinco = Math.ceil(nota / 5) * 5;
    if (multcinco - nota < 3) {
        return multcinco + ' aprovado'; 
    } else {
        return nota + ' aprovado';
    }
}


let sit = Apro(68)
console.log(sit)