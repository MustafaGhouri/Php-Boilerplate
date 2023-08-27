//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/F/g, "ᚠ");
car = car.replace(/U/g, "ᚢ");
car = car.replace(/R/g, "ᚱ");
car = car.replace(/K/g, "ᚴ");
car = car.replace(/H/g, "ᚽ");
car = car.replace(/N/g, "ᚿ");
car = car.replace(/I/g, "ᛁ");
car = car.replace(/A/g, "ᛆ");
car = car.replace(/S/g, "ᛌ");
car = car.replace(/T/g, "ᛐ");
car = car.replace(/B/g, "ᛓ");
car = car.replace(/M/g, "ᛙ");
car = car.replace(/L/g, "ᛚ");
car = car.replace(/Þ/g, "ᚦ");
car = car.replace(/ᛐ=/g, "ᚦ");
car = car.replace(/ᛆ=/g, "ᚭ");
car = car.replace(/Ą/g, "ᚭ");

car = car.replace(/f/g, "ᚠ");
car = car.replace(/u/g, "ᚢ");
car = car.replace(/r/g, "ᚱ");
car = car.replace(/k/g, "ᚴ");
car = car.replace(/h/g, "ᚼ");
car = car.replace(/n/g, "ᚾ");
car = car.replace(/i/g, "ᛁ");
car = car.replace(/a/g, "ᛅ");
car = car.replace(/s/g, "ᛋ");
car = car.replace(/t/g, "ᛏ");
car = car.replace(/b/g, "ᛒ");
car = car.replace(/m/g, "ᛘ");
car = car.replace(/l/g, "ᛚ");
car = car.replace(/þ/g, "ᚦ");
car = car.replace(/ᛏ=/g, "ᚦ");
car = car.replace(/ą/g, "ᚬ");
car = car.replace(/ᛅ=/g, "ᚬ");
car = car.replace(/[ZƦ]/g, "ᛧ");
car = car.replace(/[zʀ]/g, "ᛦ");


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