//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a\+e/g, "æ");
car = car.replace(/A\+E/g, "Æ");
car = car.replace(/ae=/g, "æ");
car = car.replace(/AE=/g, "Æ");
car = car.replace(/a=/g, "å");
car = car.replace(/å=/g, "æ");
car = car.replace(/æ=/g, "a");
car = car.replace(/A=/g, "Å");
car = car.replace(/Å=/g, "Æ");
car = car.replace(/Æ=/g, "a");
car = car.replace(/o=/g, "ø");
car = car.replace(/ø=/g, "o");
car = car.replace(/O=/g, "Ø");
car = car.replace(/Ø=/g, "O");

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