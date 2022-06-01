var ay= prompt("Bir ay giriniz")

switch (ay) {
    case ay="ocak":
    console.log("girdiginiz ayin rakamsal karsiligi ay:", `${ay}`, "1");
        break;
    case ay="subat":
    console.log("girdiginiz ayin rakamsal karsiligi ay:", `${ay}`, "2");
        break;
    case ay= "mart":
    console.log("girdiginiz ayin rakamsal karsiligi ay:", `${ay}`, "3");
        break;
    case ay= "nisan":
    console.log("girdiginiz ayin rakamsal karsiligi ay:", `${ay}`, "4");
        break;
    case ay= "mayis":
    console.log("girdiginiz ayin rakamsal karsiligi ay:", `${ay}`, "5");
        break;
    case ay= "haziran":
    console.log("girdiginiz ayin rakamsal karsiligi ay:", `${ay}`, "6");
        break;
    case ay= "temmuz":
    console.log("girdiginiz ayin rakamsal karsiligi ay:", `${ay}`, "7");
        break;
    case ay= "agustos":
    console.log("girdiginiz ayin rakamsal karsiligi ay:", `${ay}`, "8");
        break;
    case ay= "eylül":
    console.log("girdiginiz ayin rakamsal karsiligi ay:", `${ay}`, "9");
        break;
    case ay= "ekim":
    console.log("girdiginiz ayin rakamsal karsiligi ay:", `${ay}`, "10");
        break;
    case ay= "kasim":
    console.log("girdiginiz ayin rakamsal karsiligi ay:", `${ay}`, "11");
        break;
    case ay= "aralik":
    console.log("girdiginiz ayin rakamsal karsiligi ay:", `${ay}`, "12");
        break;

    default:
        alert("yanlis ay girdiniz!")
        break;
}