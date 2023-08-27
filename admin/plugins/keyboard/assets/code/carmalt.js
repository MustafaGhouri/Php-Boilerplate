//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/c=/g, "ċ");
car = car.replace(/ċ=/g, "c");
car = car.replace(/g=/g, "ġ");
car = car.replace(/ġ=/g, "g");
car = car.replace(/h=/g, "ħ");
car = car.replace(/ħ=/g, "h");
car = car.replace(/z=/g, "ż");
car = car.replace(/ż=/g, "z");
car = car.replace(/C=/g, "Ċ");
car = car.replace(/Ċ=/g, "C");
car = car.replace(/G=/g, "Ġ");
car = car.replace(/Ġ=/g, "G");
car = car.replace(/H=/g, "Ħ");
car = car.replace(/Ħ=/g, "H");
car = car.replace(/Z=/g, "Ż");
car = car.replace(/Ż=/g, "Z");

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