const fiyatlar =  [100, 250, 50, 89];

fiyatlar.forEach((p,i,array)=> {
    array[i]=Math.round(p*1.1)
    

})
console.log(fiyatlar);


