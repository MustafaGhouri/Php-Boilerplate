//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/o\+e/g, "œ");
car = car.replace(/O\+E/g, "Œ");
car = car.replace(/a\+e/g, "æ");
car = car.replace(/A\+E/g, "Æ");
car = car.replace(/_/g, "=");
car = car.replace(/a=/g, "ă");
car = car.replace(/ă=/g, "ā");
car = car.replace(/ā=/g, "a");
car = car.replace(/e=/g, "ĕ");
car = car.replace(/ĕ=/g, "ē");
car = car.replace(/ē=/g, "e");
car = car.replace(/i=/g, "ĭ");
car = car.replace(/ĭ=/g, "ī");
car = car.replace(/ī=/g, "i");
car = car.replace(/o=/g, "ŏ");
car = car.replace(/ŏ=/g, "ō");
car = car.replace(/ō=/g, "o");
car = car.replace(/u=/g, "ŭ");
car = car.replace(/ŭ=/g, "ū");
car = car.replace(/ū=/g, "u");
car = car.replace(/y=/g, "y̆");
car = car.replace(/y̆=/g, "ȳ");
car = car.replace(/ȳ=/g, "y");

car = car.replace(/A=/g, "Ă");
car = car.replace(/Ă=/g, "Ā");
car = car.replace(/Ā=/g, "A");
car = car.replace(/E=/g, "Ĕ");
car = car.replace(/Ĕ=/g, "Ē");
car = car.replace(/Ē=/g, "E");
car = car.replace(/I=/g, "Ĭ");
car = car.replace(/Ĭ=/g, "Ī");
car = car.replace(/Ī=/g, "I");
car = car.replace(/O=/g, "Ŏ");
car = car.replace(/Ŏ=/g, "Ō");
car = car.replace(/Ō=/g, "O");
car = car.replace(/U=/g, "Ŭ");
car = car.replace(/Ŭ=/g, "Ū");
car = car.replace(/Ū=/g, "U");
car = car.replace(/Y=/g, "Y̆");
car = car.replace(/Y̆=/g, "Ȳ");
car = car.replace(/Ȳ=/g, "Y");

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