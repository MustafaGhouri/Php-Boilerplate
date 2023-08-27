//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/t=/g, "þ");
car = car.replace(/v=/g, "ƕ");
car = car.replace(/a=/g, "ā");
car = car.replace(/ā=/g, "a");
car = car.replace(/e=/g, "ē");
car = car.replace(/ē=/g, "e");
car = car.replace(/i=/g, "ī");
car = car.replace(/ī=/g, "i");
car = car.replace(/o=/g, "ō");
car = car.replace(/ō=/g, "o");
car = car.replace(/u=/g, "ū");
car = car.replace(/ū=/g, "u");


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