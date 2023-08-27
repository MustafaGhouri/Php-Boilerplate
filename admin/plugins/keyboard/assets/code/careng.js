//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/_/g, "=");
car = car.replace(/a\+e/g, "æ");
car = car.replace(/æ=/g, "ǣ");
car = car.replace(/ǣ=/g, "æ");
car = car.replace(/a=/g, "ā");
car = car.replace(/ā=/g, "a");
car = car.replace(/i=/g, "ī");
car = car.replace(/ī=/g, "i");
car = car.replace(/o=/g, "ō");
car = car.replace(/ō=/g, "o");
car = car.replace(/u=/g, "ū");
car = car.replace(/ū=/g, "u");
car = car.replace(/e=/g, "ē");
car = car.replace(/ē=/g, "ẹ");
car = car.replace(/ẹ=/g, "e");
car = car.replace(/d=/g, "ð");
car = car.replace(/ð=/g, "d");
car = car.replace(/t=/g, "þ");
car = car.replace(/þ=/g, "t");
car = car.replace(/g=/g, "ȝ");
car = car.replace(/ȝ=/g, "ġ");
car = car.replace(/ġ=/g, "g");
car = car.replace(/w=/g, "ƿ");
car = car.replace(/ƿ=/g, "w");
car = car.replace(/y=/g, "ȳ");
car = car.replace(/ȳ=/g, "y");
car = car.replace(/s=/g, "ſ");
car = car.replace(/ſ=/g, "s");
car = car.replace(/c=/g, "ċ");
car = car.replace(/ċ=/g, "c");

car = car.replace(/A\+E/g, "Æ");
car = car.replace(/Æ=/g, "Ǣ");
car = car.replace(/Ǣ=/g, "Æ");
car = car.replace(/A=/g, "Ā");
car = car.replace(/E=/g, "Ē");
car = car.replace(/I=/g, "Ī");
car = car.replace(/O=/g, "Ō");
car = car.replace(/U=/g, "Ū");
car = car.replace(/Ā=/g, "A");
car = car.replace(/E=/g, "Ē");
car = car.replace(/Ē=/g, "E");
car = car.replace(/Ī=/g, "I");
car = car.replace(/Ō=/g, "O");
car = car.replace(/Ū=/g, "U");
car = car.replace(/D=/g, "Ð");
car = car.replace(/Ð=/g, "D");
car = car.replace(/T=/g, "Þ");
car = car.replace(/Þ=/g, "T");
car = car.replace(/G=/g, "Ȝ");
car = car.replace(/Ȝ=/g, "Ġ");
car = car.replace(/Ġ=/g, "G");
car = car.replace(/W=/g, "Ƿ");
car = car.replace(/Ƿ=/g, "W");
car = car.replace(/Y=/g, "Ȳ");
car = car.replace(/Ȳ=/g, "Y");
car = car.replace(/C=/g, "Ċ");
car = car.replace(/Ċ=/g, "C");

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