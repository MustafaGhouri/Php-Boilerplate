//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/c=/g, "ć");
car = car.replace(/ć=/g, "č");
car = car.replace(/č=/g, "c");
car = car.replace(/e=/g, "ě");
car = car.replace(/ě=/g, "e");
car = car.replace(/l=/g, "ł");
car = car.replace(/ł=/g, "l");
car = car.replace(/n=/g, "ń");
car = car.replace(/ń=/g, "n");
car = car.replace(/o=/g, "ó");
car = car.replace(/ó=/g, "o");
car = car.replace(/r=/g, "ŕ");
car = car.replace(/ŕ=/g, "ř");
car = car.replace(/ř=/g, "r");
car = car.replace(/s=/g, "ś");
car = car.replace(/ś=/g, "š");
car = car.replace(/š=/g, "s");
car = car.replace(/z=/g, "ź");
car = car.replace(/ź=/g, "ž");
car = car.replace(/ž=/g, "z");
car = car.replace(/C=/g, "Ć");
car = car.replace(/Ć=/g, "Č");
car = car.replace(/Č=/g, "C");
car = car.replace(/E=/g, "Ě");
car = car.replace(/Ě=/g, "E");
car = car.replace(/L=/g, "Ł");
car = car.replace(/Ł=/g, "L");
car = car.replace(/N=/g, "Ń");
car = car.replace(/Ń=/g, "N");
car = car.replace(/O=/g, "Ó");
car = car.replace(/Ó=/g, "O");
car = car.replace(/R=/g, "Ŕ");
car = car.replace(/Ŕ=/g, "Ř");
car = car.replace(/Ř=/g, "R");
car = car.replace(/S=/g, "Ś");
car = car.replace(/Ś=/g, "Š");
car = car.replace(/Š=/g, "S");
car = car.replace(/Z=/g, "Ź");
car = car.replace(/Ź=/g, "Ž");
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