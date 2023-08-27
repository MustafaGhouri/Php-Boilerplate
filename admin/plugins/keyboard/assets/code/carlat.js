//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/o\+e/g, "œ");
car = car.replace(/O\+E/g, "Œ");
car = car.replace(/O\+e/g, "Œ");
car = car.replace(/a\+e/g, "æ");
car = car.replace(/A\+E/g, "Æ");
car = car.replace(/A\+e/g, "Æ");
car = car.replace(/l\+l/g, "l·l");
car = car.replace(/ll=/g, "l·l");
car = car.replace(/LL=/g, "L·L");
car = car.replace(/_/g, " ");
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
car = car.replace(/à=/g, "â");
car = car.replace(/è=/g, "ê");
car = car.replace(/ì=/g, "î");
car = car.replace(/ò=/g, "ô");
car = car.replace(/ù=/g, "û");
car = car.replace(/â=/g, "ä");
car = car.replace(/ê=/g, "ë");
car = car.replace(/î=/g, "ï");
car = car.replace(/ô=/g, "ö");
car = car.replace(/û=/g, "ü");
car = car.replace(/ä=/g, "a");
car = car.replace(/ë=/g, "e");
car = car.replace(/ï=/g, "i");
car = car.replace(/ö=/g, "o");
car = car.replace(/ü=/g, "u");
car = car.replace(/c=/g, "ç");
car = car.replace(/ç=/g, "c");
car = car.replace(/n=/g, "ñ");
car = car.replace(/ñ=/g, "n");
car = car.replace(/y=/g, "ÿ");
car = car.replace(/ÿ=/g, "y");
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
car = car.replace(/À=/g, "Â");
car = car.replace(/È=/g, "Ê");
car = car.replace(/Ì=/g, "Î");
car = car.replace(/Ò=/g, "Ô");
car = car.replace(/Ù=/g, "Û");
car = car.replace(/Â=/g, "Ä");
car = car.replace(/Ê=/g, "Ë");
car = car.replace(/Î=/g, "Ï");
car = car.replace(/Ô=/g, "Ö");
car = car.replace(/Û=/g, "Ü");
car = car.replace(/Ä=/g, "A");
car = car.replace(/Ë=/g, "E");
car = car.replace(/Ï=/g, "I");
car = car.replace(/Ö=/g, "O");
car = car.replace(/Ü=/g, "U");
car = car.replace(/C=/g, "Ç");
car = car.replace(/Ç=/g, "C");
car = car.replace(/N=/g, "Ñ");
car = car.replace(/Ñ=/g, "N");
car = car.replace(/Y=/g, "Ÿ");
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