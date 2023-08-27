//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a=/g, "ă");
car = car.replace(/ă=/g, "â");
car = car.replace(/â=/g, "a");
car = car.replace(/i=/g, "î");
car = car.replace(/î=/g, "i");
car = car.replace(/s=/g, "ș");
car = car.replace(/ș=/g, "s");
car = car.replace(/t=/g, "ț");
car = car.replace(/ț=/g, "t");
car = car.replace(/s_/g, "ş");
car = car.replace(/ş_/g, "s");
car = car.replace(/t_/g, "ţ");
car = car.replace(/ţ_/g, "t");
car = car.replace(/A=/g, "Ă");
car = car.replace(/Ă=/g, "Â");
car = car.replace(/Â=/g, "A");
car = car.replace(/I=/g, "Î");
car = car.replace(/Î=/g, "I");
car = car.replace(/S=/g, "Ş");
car = car.replace(/Ş=/g, "S");
car = car.replace(/T=/g, "Ţ");
car = car.replace(/Ţ=/g, "T");
car = car.replace(/S_/g, "Ș");
car = car.replace(/Ș_/g, "S");
car = car.replace(/T_/g, "Ț");
car = car.replace(/Ț_/g, "T");

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