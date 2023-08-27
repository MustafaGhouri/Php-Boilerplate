//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a=/g, "ä");
car = car.replace(/ä=/g, "a");
car = car.replace(/o=/g, "ö");
car = car.replace(/ö=/g, "o");
car = car.replace(/u=/g, "ü");
car = car.replace(/ü=/g, "u");
car = car.replace(/A=/g, "Ä");
car = car.replace(/Ä=/g, "A");
car = car.replace(/O=/g, "Ö");
car = car.replace(/Ö=/g, "O");
car = car.replace(/U=/g, "Ü");
car = car.replace(/Ü=/g, "U");
car = car.replace(/s=/g, "ſ");
car = car.replace(/ſ=/g, "ß");
car = car.replace(/ß=/g, "s");
car = car.replace(/r=/g, "ꝛ");
car = car.replace(/ꝛ=/g, "r");

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
