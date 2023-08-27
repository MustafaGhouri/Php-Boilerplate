//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a\+e/g, "æ");
car = car.replace(/A\+E/g, "Æ");
car = car.replace(/a=/g, "á");
car = car.replace(/á=/g, "æ");
car = car.replace(/æ=/g, "a");
car = car.replace(/e=/g, "é");
car = car.replace(/é=/g, "e");
car = car.replace(/i=/g, "í");
car = car.replace(/í=/g, "i");
car = car.replace(/o=/g, "ó");
car = car.replace(/ó=/g, "ø");
car = car.replace(/ø=/g, "o");
car = car.replace(/u=/g, "ú");
car = car.replace(/ú=/g, "u");
car = car.replace(/y=/g, "ý");
car = car.replace(/ý=/g, "y");
car = car.replace(/d=/g, "ð");
car = car.replace(/ð=/g, "d");
car = car.replace(/t=/g, "þ");
car = car.replace(/þ=/g, "t");
car = car.replace(/A=/g, "Á");
car = car.replace(/Á=/g, "Æ");
car = car.replace(/Æ=/g, "A");
car = car.replace(/E=/g, "É");
car = car.replace(/É=/g, "E");
car = car.replace(/I=/g, "Í");
car = car.replace(/Í=/g, "I");
car = car.replace(/O=/g, "Ó");
car = car.replace(/Ó=/g, "Ø");
car = car.replace(/Ø=/g, "O");
car = car.replace(/U=/g, "Ú");
car = car.replace(/Ú=/g, "U");
car = car.replace(/Y=/g, "Ý");
car = car.replace(/Ý=/g, "Y");
car = car.replace(/D=/g, "Ð");
car = car.replace(/Ð=/g, "D");
car = car.replace(/T=/g, "Þ");
car = car.replace(/Þ=/g, "T");

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