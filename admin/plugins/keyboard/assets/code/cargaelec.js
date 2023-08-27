//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a=/g, "à");
car = car.replace(/à=/g, "a");
car = car.replace(/e=/g, "è");
car = car.replace(/è=/g, "e");
car = car.replace(/i=/g, "ì");
car = car.replace(/ì=/g, "i");
car = car.replace(/o=/g, "ò");
car = car.replace(/ò=/g, "o");
car = car.replace(/u=/g, "ù");
car = car.replace(/ù=/g, "u");
car = car.replace(/A=/g, "À");
car = car.replace(/À=/g, "A");
car = car.replace(/E=/g, "È");
car = car.replace(/È=/g, "E");
car = car.replace(/I=/g, "Ì");
car = car.replace(/Ì=/g, "I");
car = car.replace(/O=/g, "Ò");
car = car.replace(/Ò=/g, "O");
car = car.replace(/U=/g, "Ù");
car = car.replace(/Ù=/g, "U");

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