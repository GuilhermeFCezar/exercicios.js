function Soma(n1, n2 ,s=n1+ n2, sub = n1 - n2, m = n1 * n2, d = n1/n2){

    return 'Soma: ' + s +' Subtração: ' + sub +' Multiplicação: ' +m +' Divisão: ' +d;
}
let res = Soma(1, 2)
console.log(res)