//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/c=/g, "ĉ");
car = car.replace(/ĉ=/g, "c");
car = car.replace(/g=/g, "ĝ");
car = car.replace(/ĝ=/g, "g");
car = car.replace(/h=/g, "ĥ");
car = car.replace(/ĥ=/g, "h");
car = car.replace(/j=/g, "ĵ");
car = car.replace(/ĵ=/g, "j");
car = car.replace(/s=/g, "ŝ");
car = car.replace(/ŝ=/g, "s");
car = car.replace(/u=/g, "ŭ");
car = car.replace(/ŭ=/g, "u");
car = car.replace(/C=/g, "Ĉ");
car = car.replace(/Ĉ=/g, "C");
car = car.replace(/G=/g, "Ĝ");
car = car.replace(/Ĝ=/g, "G");
car = car.replace(/H=/g, "Ĥ");
car = car.replace(/Ĥ=/g, "H");
car = car.replace(/J=/g, "Ĵ");
car = car.replace(/Ĵ=/g, "J");
car = car.replace(/S=/g, "Ŝ");
car = car.replace(/Ŝ=/g, "S");
car = car.replace(/U=/g, "Ŭ");
car = car.replace(/Ŭ=/g, "U");

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