//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/_/g, "=");
car = car.replace(/\'/g, "ʼ");
car = car.replace(/a=/g, "á");
car = car.replace(/á=/g, "à");
car = car.replace(/à=/g, "â");
car = car.replace(/â=/g, "a");
car = car.replace(/e=/g, "é");
car = car.replace(/é=/g, "è");
car = car.replace(/è=/g, "ê");
car = car.replace(/ê=/g, "e");
car = car.replace(/i=/g, "í");
car = car.replace(/í=/g, "ì");
car = car.replace(/ì=/g, "î");
car = car.replace(/î=/g, "i");
car = car.replace(/o=/g, "ó");
car = car.replace(/ó=/g, "ò");
car = car.replace(/ò=/g, "ô");
car = car.replace(/ô=/g, "o");
car = car.replace(/u=/g, "ú");
car = car.replace(/ú=/g, "ù");
car = car.replace(/ù=/g, "û");
car = car.replace(/û=/g, "u");

car = car.replace(/b=/g, "ɓ");
car = car.replace(/ɓ=/g, "b");
car = car.replace(/d=/g, "ɗ");
car = car.replace(/ɗ=/g, "d");
car = car.replace(/k=/g, "ƙ");
car = car.replace(/ƙ=/g, "k");
car = car.replace(/y=/g, "ƴ");
car = car.replace(/ƴ=/g, "y");
car = car.replace(/B=/g, "Ɓ");
car = car.replace(/Ɓ=/g, "B");
car = car.replace(/D=/g, "Ɗ");
car = car.replace(/Ɗ=/g, "D");
car = car.replace(/K=/g, "Ƙ");
car = car.replace(/Ƙ=/g, "K");
car = car.replace(/Y=/g, "Ƴ");
car = car.replace(/Ƴ=/g, "Y");

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