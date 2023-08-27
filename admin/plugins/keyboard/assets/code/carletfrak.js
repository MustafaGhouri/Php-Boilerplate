//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a=/g, "â");
car = car.replace(/â=/g, "à");
car = car.replace(/à=/g, "a");
car = car.replace(/e=/g, "ê");
car = car.replace(/ê=/g, "è");
car = car.replace(/è=/g, "e");
car = car.replace(/i=/g, "î");
car = car.replace(/î=/g, "ì");
car = car.replace(/ì=/g, "i");
car = car.replace(/o=/g, "ô");
car = car.replace(/ô=/g, "ò");
car = car.replace(/ò=/g, "o");
car = car.replace(/u=/g, "û");
car = car.replace(/û=/g, "ù");
car = car.replace(/ù=/g, "u");
car = car.replace(/g=/g, "ꞡ");
car = car.replace(/ꞡ=/g, "g");
car = car.replace(/k=/g, "ꞣ");
car = car.replace(/ꞣ=/g, "k");
car = car.replace(/l=/g, "ł");
car = car.replace(/ł=/g, "l");
car = car.replace(/n=/g, "ꞥ");
car = car.replace(/ꞥ=/g, "n");
car = car.replace(/r=/g, "ꞧ");
car = car.replace(/ꞧ=/g, "r");
car = car.replace(/s=/g, "ſ");
car = car.replace(/ſ=/g, "ẜ");
car = car.replace(/ẜ=/g, "ß");
car = car.replace(/ß=/g, "s");

car = car.replace(/A=/g, "Â");
car = car.replace(/Â=/g, "À");
car = car.replace(/À=/g, "A");
car = car.replace(/E=/g, "Ê");
car = car.replace(/Ê=/g, "È");
car = car.replace(/È=/g, "E");
car = car.replace(/I=/g, "Î");
car = car.replace(/Î=/g, "Ì");
car = car.replace(/Ì=/g, "I");
car = car.replace(/O=/g, "Ô");
car = car.replace(/Ô=/g, "Ò");
car = car.replace(/Ò=/g, "O");
car = car.replace(/U=/g, "Û");
car = car.replace(/Û=/g, "Ù");
car = car.replace(/Ù=/g, "U");
car = car.replace(/G=/g, "Ꞡ");
car = car.replace(/Ꞡ=/g, "G");
car = car.replace(/K=/g, "Ꞣ");
car = car.replace(/Ꞣ=/g, "K");
car = car.replace(/L=/g, "Ł");
car = car.replace(/Ł=/g, "L");
car = car.replace(/N=/g, "Ꞥ");
car = car.replace(/Ꞥ=/g, "N");
car = car.replace(/R=/g, "Ꞧ");
car = car.replace(/Ꞧ=/g, "R");
car = car.replace(/S=/g, "Ꞩ");
car = car.replace(/Ꞩ=/g, "S");

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
