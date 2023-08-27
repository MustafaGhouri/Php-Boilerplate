//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a=/g, "á");
car = car.replace(/á=/g, "à");
car = car.replace(/à=/g, "ã");
car = car.replace(/ã=/g, "a");
car = car.replace(/e=/g, "é");
car = car.replace(/é=/g, "è");
car = car.replace(/è=/g, "e");
car = car.replace(/j/g, "ē");
car = car.replace(/ē=/g, "ḗ");
car = car.replace(/ḗ=/g, "ḕ");
car = car.replace(/ḕ=/g, "ẽ");
car = car.replace(/ẽ=/g, "ē");
car = car.replace(/i=/g, "í");
car = car.replace(/í=/g, "ï");
car = car.replace(/ï=/g, "ḯ");
car = car.replace(/ḯ=/g, "ì");
car = car.replace(/ì=/g, "ĩ");
car = car.replace(/ĩ=/g, "i");
car = car.replace(/o=/g, "ó");
car = car.replace(/ó=/g, "ò");
car = car.replace(/ò=/g, "o");
car = car.replace(/u=/g, "ú");
car = car.replace(/ú=/g, "ü");
car = car.replace(/ü=/g, "ǘ");
car = car.replace(/ǘ=/g, "ù");
car = car.replace(/ù=/g, "ũ");
car = car.replace(/ũ=/g, "u");
car = car.replace(/w/g, "ō");
car = car.replace(/ō=/g, "ṓ");
car = car.replace(/ṓ=/g, "ṑ");
car = car.replace(/ṑ=/g, "õ");
car = car.replace(/õ=/g, "ō");

car = car.replace(/A=/g, "Á");
car = car.replace(/Á=/g, "À");
car = car.replace(/À=/g, "Ã");
car = car.replace(/Ã=/g, "A");
car = car.replace(/E=/g, "É");
car = car.replace(/É=/g, "È");
car = car.replace(/È=/g, "E");
car = car.replace(/J/g, "Ē");
car = car.replace(/Ē=/g, "Ḗ");
car = car.replace(/Ḗ=/g, "Ḕ");
car = car.replace(/Ḕ=/g, "Ẽ");
car = car.replace(/Ẽ=/g, "Ē");
car = car.replace(/I=/g, "Í");
car = car.replace(/Í=/g, "Ï");
car = car.replace(/Ï=/g, "Ḯ");
car = car.replace(/Ḯ=/g, "Ì");
car = car.replace(/Ì=/g, "Ĩ");
car = car.replace(/Ĩ=/g, "I");
car = car.replace(/O=/g, "Ó");
car = car.replace(/Ó=/g, "Ò");
car = car.replace(/Ò=/g, "O");
car = car.replace(/U=/g, "Ú");
car = car.replace(/Ú=/g, "Ü");
car = car.replace(/Ü=/g, "Ǘ");
car = car.replace(/Ǘ=/g, "Ù");
car = car.replace(/Ù=/g, "Ũ");
car = car.replace(/Ũ=/g, "U");
car = car.replace(/W/g, "Ō");
car = car.replace(/Ō=/g, "Ṓ");
car = car.replace(/Ṓ=/g, "Ṑ");
car = car.replace(/Ṑ=/g, "Õ");
car = car.replace(/Õ=/g, "Ō");

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