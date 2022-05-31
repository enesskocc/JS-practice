const puan =  +prompt("Please enter your score");

if(puan<0){
    sonuc="Eger puani bilene yanlis giriyorsan, büyük ihtimal dersten kaldin. Sen yinede tekrardan puan gir!"
}
else if (puan<=25) {
    sonuc="FF"
}
else if (puan<=45){
    sonuc="DD"
}
else if (puan<=65){
    sonuc="CC"
}
else if(puan<=75){
    sonuc="BB"
}
else if(puan<=90){
    sonuc="BA"
}
else if(puan<=100){
    sonuc="AA"
}
else if(puan>100){
    sonuc="Eger puani bilene yanlis giriyorsan, büyük ihtimal dersten kaldin. Sen yinede tekrardan puan gir!"
}


console.log("Entered score..:", `${puan}`);
console.log("your letter grade..:", `${sonuc}`);