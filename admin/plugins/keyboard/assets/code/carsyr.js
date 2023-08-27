//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a/g, "ܐ");
car = car.replace(/ʾ/g, "ܐ");
car = car.replace(/b/g, "ܒ");
car = car.replace(/g/g, "ܓ");
car = car.replace(/d/g, "ܕ");
car = car.replace(/h/g, "ܗ");
car = car.replace(/[wvu]/g, "ܘ");
car = car.replace(/z/g, "ܙ");
car = car.replace(/[HḤḥ]/g, "ܚ");
car = car.replace(/[TṬṭ]/g, "ܛ");
car = car.replace(/[yi]/g, "ܝ");
car = car.replace(/k/g, "ܟ");
car = car.replace(/l/g, "ܠ");
car = car.replace(/m/g, "ܡ");
car = car.replace(/n/g, "ܢ");
car = car.replace(/s/g, "ܣ");
car = car.replace(/-/g, "ܥ");
car = car.replace(/ʿ/g, "ܥ");
car = car.replace(/[oêè]/g, "ܥ");
car = car.replace(/p/g, "ܦ");
car = car.replace(/[SṢṣ]/g, "ܨ");
car = car.replace(/q/g, "ܩ");
car = car.replace(/r/g, "ܪ");
car = car.replace(/t/g, "ܬ");
car = car.replace(/[cš]/g, "ܫ");
//yh
car = car.replace(/ܝܗ=/g, "ܞ");

//syame
car = car.replace(/\"/g, "̈");


startPos = document.conversion.saisie.selectionStart;
endPos = document.conversion.saisie.selectionEnd;

beforeLen = document.conversion.saisie.value.length;
afterLen = car.length;
adjustment = afterLen - beforeLen;

document.conversion.saisie.value = car;

document.conversion.saisie.selectionStart = startPos + adjustment;
document.conversion.saisie.selectionEnd = endPos + adjustment;

var obj = document.conversion.saisie;
obj.focus();
obj.scrollTop = obj.scrollHeight;
}