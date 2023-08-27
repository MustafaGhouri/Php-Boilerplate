//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a=/g, "à");
car = car.replace(/à=/g, "a");
car = car.replace(/e=/g, "é");
car = car.replace(/é=/g, "ë");
car = car.replace(/ë=/g, "e");
car = car.replace(/o=/g, "ó");
car = car.replace(/ó=/g, "o");
car = car.replace(/n=/g, "ñ");
car = car.replace(/ñ=/g, "ŋ");
car = car.replace(/ŋ=/g, "n");
car = car.replace(/A=/g, "À");
car = car.replace(/À=/g, "A");
car = car.replace(/E=/g, "É");
car = car.replace(/É=/g, "Ë");
car = car.replace(/Ë=/g, "E");
car = car.replace(/O=/g, "Ó");
car = car.replace(/Ó=/g, "O");
car = car.replace(/N=/g, "Ñ");
car = car.replace(/Ñ=/g, "Ŋ");
car = car.replace(/Ŋ=/g, "N");

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