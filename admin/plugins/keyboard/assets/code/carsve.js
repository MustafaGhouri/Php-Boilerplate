//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a=/g, "å");
car = car.replace(/å=/g, "ä");
car = car.replace(/ä=/g, "a");
car = car.replace(/A=/g, "Å");
car = car.replace(/Å=/g, "Ä");
car = car.replace(/Ä=/g, "A");
car = car.replace(/o=/g, "ö");
car = car.replace(/ö=/g, "o");
car = car.replace(/O=/g, "Ö");
car = car.replace(/Ö=/g, "O");

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