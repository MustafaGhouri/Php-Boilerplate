//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/_/g, "=");
car = car.replace(/a=/g, "á");
car = car.replace(/á=/g, "ã");
car = car.replace(/ã=/g, "â");
car = car.replace(/â=/g, "à");
car = car.replace(/à=/g, "a");
car = car.replace(/e=/g, "é");
car = car.replace(/é=/g, "ê");
car = car.replace(/ê=/g, "e");
car = car.replace(/i=/g, "í");
car = car.replace(/í=/g, "i");
car = car.replace(/o=/g, "ó");
car = car.replace(/ó=/g, "õ");
car = car.replace(/õ=/g, "ô");
car = car.replace(/ô=/g, "o");
car = car.replace(/u=/g, "ú");
car = car.replace(/ú=/g, "ü");
car = car.replace(/ü=/g, "u");
car = car.replace(/c=/g, "ç");
car = car.replace(/ç=/g, "c");
car = car.replace(/n=/g, "ñ");
car = car.replace(/ñ=/g, "n");
	
car = car.replace(/A=/g, "Á");
car = car.replace(/Á=/g, "Ã");
car = car.replace(/Ã=/g, "Â");
car = car.replace(/Â=/g, "À");
car = car.replace(/À=/g, "A");
car = car.replace(/E=/g, "É");
car = car.replace(/É=/g, "Ê");
car = car.replace(/Ê=/g, "E");
car = car.replace(/I=/g, "Í");
car = car.replace(/Í=/g, "I");
car = car.replace(/O=/g, "Ó");
car = car.replace(/Ó=/g, "Õ");
car = car.replace(/Õ=/g, "Ô");
car = car.replace(/Ô=/g, "O");
car = car.replace(/U=/g, "Ú");
car = car.replace(/Ú=/g, "Ü");
car = car.replace(/Ü=/g, "U");
car = car.replace(/C=/g, "Ç");
car = car.replace(/Ç=/g, "C");
car = car.replace(/N=/g, "Ñ");
car = car.replace(/Ñ=/g, "N");

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