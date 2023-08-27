//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a=/g, "ā");
car = car.replace(/ā=/g, "ă");
car = car.replace(/ă=/g, "a");
car = car.replace(/c=/g, "č");
car = car.replace(/č=/g, "c");
car = car.replace(/e=/g, "ē");
car = car.replace(/ē=/g, "e");
car = car.replace(/g=/g, "ģ");
car = car.replace(/ģ=/g, "g");
car = car.replace(/i=/g, "ī");
car = car.replace(/ī=/g, "i");
car = car.replace(/k=/g, "ķ");
car = car.replace(/ķ=/g, "k");
car = car.replace(/l=/g, "ļ");
car = car.replace(/ļ=/g, "l");
car = car.replace(/n=/g, "ņ");
car = car.replace(/ņ=/g, "n");
car = car.replace(/s=/g, "š");
car = car.replace(/š=/g, "s");
car = car.replace(/u=/g, "ū");
car = car.replace(/ū=/g, "u");
car = car.replace(/z=/g, "ž");
car = car.replace(/ž=/g, "z");
car = car.replace(/A=/g, "Ā");
car = car.replace(/Ā=/g, "A");
car = car.replace(/C=/g, "Č");
car = car.replace(/Č=/g, "C");
car = car.replace(/E=/g, "Ē");
car = car.replace(/Ē=/g, "E");
car = car.replace(/G=/g, "Ģ");
car = car.replace(/Ģ=/g, "G");
car = car.replace(/I=/g, "Ī");
car = car.replace(/Ī=/g, "I");
car = car.replace(/K=/g, "Ķ");
car = car.replace(/Ķ=/g, "K");
car = car.replace(/L=/g, "Ļ");
car = car.replace(/Ļ=/g, "L");
car = car.replace(/N=/g, "Ņ");
car = car.replace(/Ņ=/g, "N");
car = car.replace(/S=/g, "Š");
car = car.replace(/Š=/g, "S");
car = car.replace(/U=/g, "Ū");
car = car.replace(/Ū=/g, "U");
car = car.replace(/Z=/g, "Ž");
car = car.replace(/Ž=/g, "Z");
//old
car = car.replace(/o=/g, "ō");
car = car.replace(/ō=/g, "o");
car = car.replace(/O=/g, "Ō");
car = car.replace(/Ō=/g, "O");
car = car.replace(/r=/g, "ŗ");
car = car.replace(/ŗ=/g, "r");
car = car.replace(/R=/g, "Ŗ");
car = car.replace(/Ŗ=/g, "R");

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