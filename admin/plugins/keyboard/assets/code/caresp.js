//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/_/g, "=");
car = car.replace(/a=/g, "á");
car = car.replace(/e=/g, "é");
car = car.replace(/i=/g, "í");
car = car.replace(/o=/g, "ó");
car = car.replace(/u=/g, "ú");
car = car.replace(/á=/g, "a");
car = car.replace(/é=/g, "e");
car = car.replace(/í=/g, "i");
car = car.replace(/ó=/g, "o");
car = car.replace(/ú=/g, "ü");
car = car.replace(/ü=/g, "u");
car = car.replace(/n=/g, "ñ");
car = car.replace(/ñ=/g, "n");
car = car.replace(/A=/g, "Á");
car = car.replace(/E=/g, "É");
car = car.replace(/I=/g, "Í");
car = car.replace(/O=/g, "Ó");
car = car.replace(/U=/g, "Ú");
car = car.replace(/Á=/g, "A");
car = car.replace(/É=/g, "E");
car = car.replace(/Í=/g, "I");
car = car.replace(/Ó=/g, "O");
car = car.replace(/Ú=/g, "Ü");
car = car.replace(/Ü=/g, "U");
car = car.replace(/N=/g, "Ñ");
car = car.replace(/Ñ=/g, "N");
car = car.replace(/\?=/g, "¿");
car = car.replace(/\!=/g, "¡");

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