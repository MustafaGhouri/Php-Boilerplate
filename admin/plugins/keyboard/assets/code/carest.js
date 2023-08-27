//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/_/g, "=");
car = car.replace(/a=/g, "ä");
car = car.replace(/ä=/g, "a");
car = car.replace(/o=/g, "ö");
car = car.replace(/ö=/g, "õ");
car = car.replace(/õ=/g, "o");
car = car.replace(/s=/g, "š");
car = car.replace(/š=/g, "s");
car = car.replace(/u=/g, "ü");
car = car.replace(/ü=/g, "u");
car = car.replace(/z=/g, "ž");
car = car.replace(/ž=/g, "z");
car = car.replace(/A=/g, "Ä");
car = car.replace(/Ä=/g, "A");
car = car.replace(/O=/g, "Ö");
car = car.replace(/Ö=/g, "Õ");
car = car.replace(/Õ=/g, "O");
car = car.replace(/S=/g, "Š");
car = car.replace(/Š=/g, "S");
car = car.replace(/U=/g, "Ü");
car = car.replace(/Ü=/g, "U");
car = car.replace(/Z=/g, "Ž");
car = car.replace(/Ž=/g, "Z");

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
