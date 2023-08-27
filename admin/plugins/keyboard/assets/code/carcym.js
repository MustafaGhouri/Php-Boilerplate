//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/_/g, "=");
car = car.replace(/a=/g, "â");
car = car.replace(/â=/g, "á");
car = car.replace(/á=/g, "à");
car = car.replace(/à=/g, "ä");
car = car.replace(/ä=/g, "a");
car = car.replace(/e=/g, "ê");
car = car.replace(/ê=/g, "é");
car = car.replace(/é=/g, "è");
car = car.replace(/è=/g, "ë");
car = car.replace(/ë=/g, "e");
car = car.replace(/i=/g, "î");
car = car.replace(/î=/g, "í");
car = car.replace(/í=/g, "ì");
car = car.replace(/ì=/g, "ï");
car = car.replace(/ï=/g, "i");
car = car.replace(/o=/g, "ô");
car = car.replace(/ô=/g, "ó");
car = car.replace(/ó=/g, "ò");
car = car.replace(/ò=/g, "ö");
car = car.replace(/ö=/g, "o");
car = car.replace(/u=/g, "û");
car = car.replace(/û=/g, "ú");
car = car.replace(/ú=/g, "ù");
car = car.replace(/ù=/g, "ü");
car = car.replace(/ü=/g, "u");
car = car.replace(/w=/g, "ŵ");
car = car.replace(/ŵ=/g, "ẃ");
car = car.replace(/ẃ=/g, "ẁ");
car = car.replace(/ẁ=/g, "ẅ");
car = car.replace(/ẅ=/g, "w");
car = car.replace(/y=/g, "ŷ");
car = car.replace(/ŷ=/g, "ý");
car = car.replace(/ý=/g, "ỳ");
car = car.replace(/ỳ=/g, "ÿ");
car = car.replace(/ÿ=/g, "y");
car = car.replace(/A=/g, "Â");
car = car.replace(/Â=/g, "Á");
car = car.replace(/Á=/g, "À");
car = car.replace(/À=/g, "Ä");
car = car.replace(/Ä=/g, "A");
car = car.replace(/E=/g, "Ê");
car = car.replace(/Ê=/g, "É");
car = car.replace(/É=/g, "È");
car = car.replace(/È=/g, "Ë");
car = car.replace(/Ë=/g, "E");
car = car.replace(/I=/g, "Î");
car = car.replace(/Î=/g, "Í");
car = car.replace(/Í=/g, "Ì");
car = car.replace(/Ì=/g, "Ï");
car = car.replace(/Ï=/g, "I");
car = car.replace(/O=/g, "Ô");
car = car.replace(/Ô=/g, "Ó");
car = car.replace(/Ó=/g, "Ò");
car = car.replace(/Ò=/g, "Ö");
car = car.replace(/Ö=/g, "O");
car = car.replace(/U=/g, "Û");
car = car.replace(/Û=/g, "Ú");
car = car.replace(/Ú=/g, "Ù");
car = car.replace(/Ù=/g, "Ü");
car = car.replace(/Ü=/g, "U");
car = car.replace(/W=/g, "Ŵ");
car = car.replace(/Ŵ=/g, "Ẃ");
car = car.replace(/Ẃ=/g, "Ẁ");
car = car.replace(/Ẁ=/g, "Ẅ");
car = car.replace(/Ẅ=/g, "W");
car = car.replace(/Y=/g, "Ŷ");
car = car.replace(/Ŷ=/g, "Ý");
car = car.replace(/Ý=/g, "Ỳ");
car = car.replace(/Ỳ=/g, "Ÿ");
car = car.replace(/Ÿ=/g, "Y");

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