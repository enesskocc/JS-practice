const year= function (e) {
    return e%4==0 ? `${e} yili artik yildir` : `${e} yili artik yil degildir`
}

console.log(year(2001));
console.log(year(2024));