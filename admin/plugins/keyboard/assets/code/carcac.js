//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a=/g, "ą");
car = car.replace(/ą=/g, "ã");
car = car.replace(/ã=/g, "a");
car = car.replace(/c=/g, "ć");
car = car.replace(/ć=/g, "c");
car = car.replace(/e=/g, "é");
car = car.replace(/é=/g, "ë");
car = car.replace(/ë=/g, "e");
car = car.replace(/l=/g, "ł");
car = car.replace(/ł=/g, "l");
car = car.replace(/n=/g, "ń");
car = car.replace(/ń=/g, "n");
car = car.replace(/o=/g, "ó");
car = car.replace(/ó=/g, "ò");
car = car.replace(/ò=/g, "ô");
car = car.replace(/ô=/g, "o");
car = car.replace(/s=/g, "ś");
car = car.replace(/ś=/g, "s");
car = car.replace(/u=/g, "ù");
car = car.replace(/ù=/g, "u");
car = car.replace(/z=/g, "ż");
car = car.replace(/ż=/g, "ź");
car = car.replace(/ź=/g, "z");
car = car.replace(/A=/g, "Ą");
car = car.replace(/Ą=/g, "Ã");
car = car.replace(/Ã=/g, "A");
car = car.replace(/C=/g, "Ć");
car = car.replace(/Ć=/g, "C");
car = car.replace(/E=/g, "É");
car = car.replace(/É=/g, "Ë");
car = car.replace(/Ë=/g, "E");
car = car.replace(/L=/g, "Ł");
car = car.replace(/Ł=/g, "L");
car = car.replace(/N=/g, "Ń");
car = car.replace(/Ń=/g, "N");
car = car.replace(/O=/g, "Ó");
car = car.replace(/Ó=/g, "Ò");
car = car.replace(/Ò=/g, "Ô");
car = car.replace(/Ô=/g, "O");
car = car.replace(/S=/g, "Ś");
car = car.replace(/Ś=/g, "S");
car = car.replace(/U=/g, "Ù");
car = car.replace(/Ù=/g, "U");
car = car.replace(/Z=/g, "Ż");
car = car.replace(/Ż=/g, "Ź");
car = car.replace(/Ź=/g, "Z");

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