function bas(ax2, bx, c){

    const delta = Math.pow(bx, 2) - 4 * ax2 * c
    const bask = (-bx + Math.sqrt(delta)) / (2 * ax2) 
    const bask2 =  (-bx - Math.sqrt(delta)) / (2 * ax2)  
    
    if(delta < 0){
        return 'delta negativo'
    }

    return [bask, bask2]

}

let res = bas(5, 11 ,3)
console.log(res)