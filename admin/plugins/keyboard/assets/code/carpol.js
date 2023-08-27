//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a=/g, "ą");
car = car.replace(/ą=/g, "a");
car = car.replace(/c=/g, "ć");
car = car.replace(/ć=/g, "c");
car = car.replace(/e=/g, "ę");
car = car.replace(/ę=/g, "e");
car = car.replace(/l=/g, "ł");
car = car.replace(/ł=/g, "l");
car = car.replace(/n=/g, "ń");
car = car.replace(/ń=/g, "n");
car = car.replace(/o=/g, "ó");
car = car.replace(/ó=/g, "o");
car = car.replace(/s=/g, "ś");
car = car.replace(/ś=/g, "s");
car = car.replace(/z=/g, "ź");
car = car.replace(/ź=/g, "ż");
car = car.replace(/ż=/g, "z");
car = car.replace(/A=/g, "Ą");
car = car.replace(/Ą=/g, "A");
car = car.replace(/C=/g, "Ć");
car = car.replace(/Ć=/g, "C");
car = car.replace(/E=/g, "Ę");
car = car.replace(/Ę=/g, "E");
car = car.replace(/L=/g, "Ł");
car = car.replace(/Ł=/g, "L");
car = car.replace(/N=/g, "Ń");
car = car.replace(/Ń=/g, "N");
car = car.replace(/O=/g, "Ó");
car = car.replace(/Ó=/g, "O");
car = car.replace(/S=/g, "Ś");
car = car.replace(/Ś=/g, "S");
car = car.replace(/Z=/g, "Ź");
car = car.replace(/Ź=/g, "Ż");
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