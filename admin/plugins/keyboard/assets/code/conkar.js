//copyright lexilogos.com 
var car;

function latkar() {
car = document.transcription.text2.value.toLowerCase();
car = car.replace(/k’/g, "კ");
car = car.replace(/t’/g, "ტ");
car = car.replace(/p’/g, "პ");
car = car.replace(/q’/g, "q");
car = car.replace(/ts’/g, "წ");
car = car.replace(/ch’/g, "ჭ");
car = car.replace(/k'/g, "კ");
car = car.replace(/t'/g, "ტ");
car = car.replace(/p'/g, "პ");
car = car.replace(/q'/g, "q");
car = car.replace(/q/g, "ყ");
car = car.replace(/ts'/g, "წ");
car = car.replace(/ch'/g, "ჭ");
car = car.replace(/gh/g, "ღ");
car = car.replace(/sh/g, "შ");
car = car.replace(/ch/g, "ჩ");
car = car.replace(/ts/g, "ც");
car = car.replace(/dz/g, "ძ");
car = car.replace(/kh/g, "ხ");
car = car.replace(/zh/g, "ჟ");
car = car.replace(/a/g, "ა");
car = car.replace(/b/g, "ბ");
car = car.replace(/g/g, "გ");
car = car.replace(/d/g, "დ");
car = car.replace(/e/g, "ე");
car = car.replace(/v/g, "ვ");
car = car.replace(/z/g, "ზ");
car = car.replace(/t/g, "თ");
car = car.replace(/i/g, "ი");
car = car.replace(/l/g, "ლ");
car = car.replace(/m/g, "მ");
car = car.replace(/n/g, "ნ");
car = car.replace(/o/g, "ო");
car = car.replace(/r/g, "რ");
car = car.replace(/s/g, "ს");
car = car.replace(/u/g, "უ");
car = car.replace(/p/g, "ფ");
car = car.replace(/k/g, "ქ");
car = car.replace(/j/g, "ჯ");
car = car.replace(/h/g, "ჰ");
document.transcription.text1.value = car;
}

function karlat() {
car = document.transcription.text1.value;
car = car.replace(/ა/g, "a");
car = car.replace(/ბ/g, "b");
car = car.replace(/გ/g, "g");
car = car.replace(/დ/g, "d");
car = car.replace(/ე/g, "e");
car = car.replace(/ვ/g, "v");
car = car.replace(/ზ/g, "z");
car = car.replace(/თ/g, "t");
car = car.replace(/ი/g, "i");
car = car.replace(/კ/g, "k’");
car = car.replace(/ლ/g, "l");
car = car.replace(/მ/g, "m");
car = car.replace(/ნ/g, "n");
car = car.replace(/ო/g, "o");
car = car.replace(/პ/g, "p’");
car = car.replace(/ჟ/g, "zh");
car = car.replace(/რ/g, "r");
car = car.replace(/ს/g, "s");
car = car.replace(/ტ/g, "t’");
car = car.replace(/უ/g, "u");
car = car.replace(/ფ/g, "p");
car = car.replace(/ქ/g, "k");
car = car.replace(/ღ/g, "gh");
car = car.replace(/ყ/g, "q’");
car = car.replace(/შ/g, "sh");
car = car.replace(/ჩ/g, "ch");
car = car.replace(/ც/g, "ts");
car = car.replace(/ძ/g, "dz");
car = car.replace(/წ/g, "ts’");
car = car.replace(/ჭ/g, "ch’");
car = car.replace(/ხ/g, "kh");
car = car.replace(/ჯ/g, "j");
car = car.replace(/ჰ/g, "h");
document.transcription.text2.value = car;
}