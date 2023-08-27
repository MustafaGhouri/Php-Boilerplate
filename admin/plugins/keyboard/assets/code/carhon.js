//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a=/g, "á");
car = car.replace(/á=/g, "a");
car = car.replace(/e=/g, "é");
car = car.replace(/é=/g, "e");
car = car.replace(/i=/g, "í");
car = car.replace(/í=/g, "i");
car = car.replace(/o=/g, "ó");
car = car.replace(/ó=/g, "ö");
car = car.replace(/ö=/g, "ő");
car = car.replace(/ő=/g, "o");
car = car.replace(/u=/g, "ú");
car = car.replace(/ú=/g, "ü");
car = car.replace(/ü=/g, "ű");
car = car.replace(/ű=/g, "u");
car = car.replace(/A=/g, "Á");
car = car.replace(/Á=/g, "A");
car = car.replace(/E=/g, "É");
car = car.replace(/É=/g, "E");
car = car.replace(/I=/g, "Í");
car = car.replace(/Í=/g, "I");
car = car.replace(/O=/g, "Ó");
car = car.replace(/Ó=/g, "Ö");
car = car.replace(/Ö=/g, "Ő");
car = car.replace(/Ő=/g, "O");
car = car.replace(/U=/g, "Ú");
car = car.replace(/Ú=/g, "Ü");
car = car.replace(/Ü=/g, "Ű");
car = car.replace(/Ű=/g, "U");

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