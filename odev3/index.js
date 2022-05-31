const sayi1= +prompt("Birinci sayiyi giriniz");
const sayi2= +prompt("ikinci sayiyi giriniz");
const sayi3= +prompt("ucuncu sayiyi giriniz");

console.log("sayilarin toplami..:", sayi1 + sayi2 + sayi3);
console.log("sayilarin carpimi..:", sayi1 * sayi2 * sayi3);
// ******************************************

if(sayi1>sayi2 && sayi1>sayi3){
    console.log("en büyük sayi:", `${sayi1}`);
}

else if(sayi2>sayi1 && sayi2>sayi3){
    console.log("en büyük sayi:", `${sayi2}`);
}

else{
   console.log("En büyük sayi:", `${sayi3}`); 
}

if(sayi1<sayi2 && sayi1<sayi3){
    console.log("en kucuk sayi:", `${sayi1}`);
}

else if(sayi2<sayi1 && sayi2<sayi3){
    console.log("en kucuk sayi:", `${sayi2}`);
}

else{
   console.log("En kucuk sayi:", `${sayi3}`); 
}