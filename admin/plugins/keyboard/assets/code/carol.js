//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a/g, "ᱚ");
car = car.replace(/t/g, "ᱛ");
car = car.replace(/[Tṭ]/g, "ᱴ");
car = car.replace(/ᱛ=/g, "ᱴ");
car = car.replace(/ᱴ=/g, "ᱛ");
car = car.replace(/g/g, "ᱜ");
car = car.replace(/l/g, "ᱞ");
car = car.replace(/ā/g, "ᱟ");
car = car.replace(/A/g, "ᱟ");
car = car.replace(/ᱚᱚ/g, "ᱟ");
car = car.replace(/k/g, "ᱠ");
car = car.replace(/j/g, "ᱡ");
car = car.replace(/m/g, "ᱢ");
car = car.replace(/[Mṃ]/g, "ᱝ");
car = car.replace(/ᱢ=/g, "ᱝ");
car = car.replace(/ᱝ=/g, "ᱢ");
car = car.replace(/w/g, "ᱣ");
car = car.replace(/i/g, "ᱤ");
car = car.replace(/s/g, "ᱥ");
car = car.replace(/n/g, "ᱱ");
car = car.replace(/[Nṇ]/g, "ᱬ");
car = car.replace(/ᱱ=/g, "ᱬ");
car = car.replace(/[Gṅ]/g, "ᱶ");
car = car.replace(/ᱬ=/g, "ᱶ");
car = car.replace(/[Jñ]/g, "ᱧ");
car = car.replace(/ᱶ=/g, "ᱧ");
car = car.replace(/ᱧ=/g, "ᱱ");
car = car.replace(/r/g, "ᱨ");
car = car.replace(/[Rṛ]/g, "ᱲ");
car = car.replace(/ᱨ=/g, "ᱲ");
car = car.replace(/ᱲ=/g, "ᱨ");
car = car.replace(/u/g, "ᱩ");
car = car.replace(/c/g, "ᱪ");
car = car.replace(/d/g, "ᱫ");
car = car.replace(/[Dḍ]/g, "ᱰ");
car = car.replace(/ᱫ=/g, "ᱰ");
car = car.replace(/ᱰ=/g, "ᱫ");
car = car.replace(/y/g, "ᱭ");
car = car.replace(/e/g, "ᱮ");
car = car.replace(/p/g, "ᱯ");
car = car.replace(/o/g, "ᱳ");
car = car.replace(/b/g, "ᱵ");
car = car.replace(/h/g, "ᱷ");
car = car.replace(/[Hẖ]/g, "ᱦ");
car = car.replace(/ᱷ=/g, "ᱦ");
car = car.replace(/ᱦ=/g, "ᱷ");

car = car.replace(/ᱝᱝ/g, "ᱸ");
car = car.replace(/'/g, "ᱽ");


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