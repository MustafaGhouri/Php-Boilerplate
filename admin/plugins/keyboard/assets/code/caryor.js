//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a=/g, "á");
car = car.replace(/e=/g, "é");
car = car.replace(/i=/g, "í");
car = car.replace(/o=/g, "ó");
car = car.replace(/u=/g, "ú");
car = car.replace(/á=/g, "à");
car = car.replace(/é=/g, "è");
car = car.replace(/í=/g, "ì");
car = car.replace(/ó=/g, "ò");
car = car.replace(/ú=/g, "ù");
car = car.replace(/à=/g, "a");
car = car.replace(/è=/g, "e");
car = car.replace(/ì=/g, "i");
car = car.replace(/ò=/g, "o");
car = car.replace(/ù=/g, "u");
car = car.replace(/n=/g, "ń");
car = car.replace(/ń=/g, "ǹ");
car = car.replace(/ǹ=/g, "n");
car = car.replace(/N=/g, "Ń");
car = car.replace(/Ń=/g, "Ǹ");
car = car.replace(/Ǹ=/g, "N");
car = car.replace(/A=/g, "Á");
car = car.replace(/E=/g, "É");
car = car.replace(/I=/g, "Í");
car = car.replace(/O=/g, "Ó");
car = car.replace(/U=/g, "Ú");
car = car.replace(/Á=/g, "À");
car = car.replace(/É=/g, "È");
car = car.replace(/Í=/g, "Ì");
car = car.replace(/Ó=/g, "Ò");
car = car.replace(/Ú=/g, "Ù");
car = car.replace(/À=/g, "A");
car = car.replace(/È=/g, "E");
car = car.replace(/Ì=/g, "I");
car = car.replace(/Ò=/g, "O");
car = car.replace(/Ù=/g, "U");
car = car.replace(/\+/g, "̣");
car = car.replace(/ẹ/g, "ẹ"); // modif car + diacritic = 1 car
car = car.replace(/ọ/g, "ọ");
car = car.replace(/ṣ/g, "ṣ");
car = car.replace(/Ẹ/g, "Ẹ");
car = car.replace(/Ọ/g, "Ọ");
car = car.replace(/Ṣ/g, "Ṣ");

car = car.replace(/̩/g, "̣");

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