//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/_/g, "=");
car = car.replace(/c=/g, "ç");
car = car.replace(/ç=/g, "c");
car = car.replace(/C=/g, "Ç");
car = car.replace(/Ç=/g, "C");
car = car.replace(/s=/g, "ş");
car = car.replace(/ş=/g, "s");
car = car.replace(/S=/g, "Ş");
car = car.replace(/Ş=/g, "S");
car = car.replace(/e=/g, "ê");
car = car.replace(/ê=/g, "é");
car = car.replace(/é=/g, "e");
car = car.replace(/u=/g, "û");
car = car.replace(/û=/g, "ú");
car = car.replace(/ú=/g, "ù");
car = car.replace(/ù=/g, "u");
car = car.replace(/i=/g, "î");
car = car.replace(/î=/g, "í");
car = car.replace(/í=/g, "i");
car = car.replace(/E=/g, "Ê");
car = car.replace(/Ê=/g, "É");
car = car.replace(/É=/g, "E");
car = car.replace(/U=/g, "Û");
car = car.replace(/Û=/g, "Ú");
car = car.replace(/Ú=/g, "Ù");
car = car.replace(/Ù=/g, "U");
car = car.replace(/I=/g, "Î");
car = car.replace(/Î=/g, "Í");
car = car.replace(/Í=/g, "I");

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