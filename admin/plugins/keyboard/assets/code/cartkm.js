// copyright lexilogos.com 
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/c=/g, "ç");
car = car.replace(/z=/g, "ž");
car = car.replace(/n=/g, "ň");
car = car.replace(/s=/g, "ş");
car = car.replace(/y=/g, "ý");
car = car.replace(/a=/g, "ä");
car = car.replace(/o=/g, "ö");
car = car.replace(/u=/g, "ü");

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