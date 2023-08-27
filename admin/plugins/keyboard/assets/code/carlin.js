//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a=/g, "á");
car = car.replace(/á=/g, "a");
car = car.replace(/e=/g, "é");
car = car.replace(/é=/g, "ɛ");
car = car.replace(/ɛ=/g, "ɛ́");
car = car.replace(/ɛ́=/g, "e");
car = car.replace(/i=/g, "í");
car = car.replace(/í=/g, "i");
car = car.replace(/o=/g, "ó");
car = car.replace(/ó=/g, "ɔ");
car = car.replace(/ɔ=/g, "ɔ́");
car = car.replace(/ɔ́=/g, "o");
car = car.replace(/u=/g, "ú");
car = car.replace(/ú=/g, "u");

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