//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/_/g, "=");
car = car.replace(/a=/g, "ā");
car = car.replace(/e=/g, "ē");
car = car.replace(/i=/g, "ī");
car = car.replace(/o=/g, "ō");
car = car.replace(/u=/g, "ū");
car = car.replace(/ā=/g, "a");
car = car.replace(/ē=/g, "e");
car = car.replace(/ī=/g, "i");
car = car.replace(/ō=/g, "o");
car = car.replace(/ū=/g, "u");
car = car.replace(/A=/g, "Ā");
car = car.replace(/E=/g, "Ē");
car = car.replace(/I=/g, "Ī");
car = car.replace(/O=/g, "Ō");
car = car.replace(/U=/g, "Ū");
car = car.replace(/Ā=/g, "A");
car = car.replace(/Ē=/g, "E");
car = car.replace(/Ī=/g, "I");
car = car.replace(/Ō=/g, "O");
car = car.replace(/Ū=/g, "U");

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