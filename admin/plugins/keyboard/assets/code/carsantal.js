//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a=/g, "ā");
car = car.replace(/ā=/g, "a");
car = car.replace(/t=/g, "ṭ");
car = car.replace(/ṭ=/g, "t");
car = car.replace(/d=/g, "ḍ");
car = car.replace(/ḍ=/g, "d");
car = car.replace(/h=/g, "ẖ");
car = car.replace(/ẖ=/g, "h");
car = car.replace(/n=/g, "ṇ");
car = car.replace(/ṇ=/g, "ṅ");
car = car.replace(/ṅ=/g, "ñ");
car = car.replace(/ñ=/g, "n");
car = car.replace(/m=/g, "ṃ");
car = car.replace(/ṃ=/g, "m");
car = car.replace(/r=/g, "ṛ");
car = car.replace(/ṛ=/g, "r");

car = car.replace(/A=/g, "Ā");
car = car.replace(/Ā=/g, "A");
car = car.replace(/T=/g, "Ṭ");
car = car.replace(/Ṭ=/g, "T");
car = car.replace(/D=/g, "Ḍ");
car = car.replace(/Ḍ=/g, "D");
car = car.replace(/H=/g, "H̱");
car = car.replace(/H̱=/g, "H");
car = car.replace(/N=/g, "Ṇ");
car = car.replace(/Ṇ=/g, "Ṅ");
car = car.replace(/Ṅ=/g, "Ñ");
car = car.replace(/Ñ=/g, "N");
car = car.replace(/M=/g, "Ṃ");
car = car.replace(/Ṃ=/g, "M");
car = car.replace(/R=/g, "Ṛ");
car = car.replace(/Ṛ=/g, "R");

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