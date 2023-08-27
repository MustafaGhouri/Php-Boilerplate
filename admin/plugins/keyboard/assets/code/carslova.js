//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a=/g, "á");
car = car.replace(/á=/g, "ä");
car = car.replace(/ä=/g, "a");
car = car.replace(/c=/g, "č");
car = car.replace(/č=/g, "c");
car = car.replace(/d=/g, "ď");
car = car.replace(/ď=/g, "d");
car = car.replace(/e=/g, "é");
car = car.replace(/é=/g, "e");
car = car.replace(/i=/g, "í");
car = car.replace(/í=/g, "i");
car = car.replace(/l=/g, "ĺ");
car = car.replace(/ĺ=/g, "ľ");
car = car.replace(/ľ=/g, "l");
car = car.replace(/n=/g, "ň");
car = car.replace(/ň=/g, "n");
car = car.replace(/o=/g, "ó");
car = car.replace(/ó=/g, "ô");
car = car.replace(/ô=/g, "o");
car = car.replace(/r=/g, "ŕ");
car = car.replace(/ŕ=/g, "r");
car = car.replace(/s=/g, "š");
car = car.replace(/š=/g, "s");
car = car.replace(/t=/g, "ť");
car = car.replace(/ť=/g, "t");
car = car.replace(/u=/g, "ú");
car = car.replace(/ú=/g, "u");
car = car.replace(/y=/g, "ý");
car = car.replace(/ý=/g, "y");
car = car.replace(/z=/g, "ž");
car = car.replace(/ž=/g, "z");
car = car.replace(/A=/g, "Á");
car = car.replace(/Á=/g, "Ä");
car = car.replace(/Ä=/g, "A");
car = car.replace(/C=/g, "Č");
car = car.replace(/Č=/g, "C");
car = car.replace(/D=/g, "Ď");
car = car.replace(/Ď=/g, "D");
car = car.replace(/E=/g, "É");
car = car.replace(/É=/g, "E");
car = car.replace(/I=/g, "Í");
car = car.replace(/Í=/g, "I");
car = car.replace(/L=/g, "Ĺ");
car = car.replace(/Ĺ=/g, "Ľ");
car = car.replace(/Ľ=/g, "L");
car = car.replace(/N=/g, "Ň");
car = car.replace(/Ň=/g, "N");
car = car.replace(/O=/g, "Ó");
car = car.replace(/Ó=/g, "Ô");
car = car.replace(/Ô=/g, "O");
car = car.replace(/R=/g, "Ŕ");
car = car.replace(/Ŕ=/g, "R");
car = car.replace(/S=/g, "Š");
car = car.replace(/Š=/g, "S");
car = car.replace(/T=/g, "Ť");
car = car.replace(/Ť=/g, "T");
car = car.replace(/U=/g, "Ú");
car = car.replace(/Ú=/g, "U");
car = car.replace(/Y=/g, "Ý");
car = car.replace(/Ý=/g, "Y");
car = car.replace(/Z=/g, "Ž");
car = car.replace(/Ž=/g, "Z");

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