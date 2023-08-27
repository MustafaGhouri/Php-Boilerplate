//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/f/g, "ᚠ");
car = car.replace(/u/g, "ᚢ");
car = car.replace(/a/g, "ᚨ");
car = car.replace(/r/g, "ᚱ");
car = car.replace(/k/g, "ᚲ");
car = car.replace(/g/g, "ᚷ");
car = car.replace(/w/g, "ᚹ");
car = car.replace(/h/g, "ᚺ");
car = car.replace(/n/g, "ᚾ");
car = car.replace(/i/g, "ᛁ");
car = car.replace(/j/g, "ᛃ");
car = car.replace(/æ/g, "ᛇ");
car = car.replace(/p/g, "ᛈ");
car = car.replace(/z/g, "ᛉ");
car = car.replace(/s/g, "ᛊ");
car = car.replace(/t/g, "ᛏ");
car = car.replace(/b/g, "ᛒ");
car = car.replace(/e/g, "ᛖ");
car = car.replace(/m/g, "ᛗ");
car = car.replace(/l/g, "ᛚ");
car = car.replace(/ŋ/g, "ᛜ");
car = car.replace(/o/g, "ᛟ");
car = car.replace(/d/g, "ᛞ");
car = car.replace(/þ/g, "ᚦ");
car = car.replace(/ᛏ=/g, "ᚦ");
car = car.replace(/ᚨ=/g, "ᛇ");
car = car.replace(/ᚾ=/g, "ᛜ");

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