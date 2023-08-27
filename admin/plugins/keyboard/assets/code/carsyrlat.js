//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/\</g, "ʿ");
car = car.replace(/\>/g, "ʾ");
car = car.replace(/a=/g, "ā");
car = car.replace(/i=/g, "ī");
car = car.replace(/u=/g, "ū");
car = car.replace(/o=/g, "ō");
car = car.replace(/e=/g, "ē");
car = car.replace(/ā=/g, "a");
car = car.replace(/ī=/g, "i");
car = car.replace(/ū=/g, "u");
car = car.replace(/ō=/g, "o");
car = car.replace(/ē=/g, "ĕ");
car = car.replace(/ĕ=/g, "e");
car = car.replace(/\^s/g, "š");
car = car.replace(/d=/g, "ḏ");
car = car.replace(/ḏ=/g, "d");
car = car.replace(/h=/g, "ḥ");
car = car.replace(/ḥ=/g, "h");
car = car.replace(/t=/g, "ṭ");
car = car.replace(/ṭ=/g, "t");
car = car.replace(/s=/g, "ṣ");
car = car.replace(/ṣ=/g, "š");
car = car.replace(/š=/g, "s");

car = car.replace(/A=/g, "Ā");
car = car.replace(/I=/g, "Ī");
car = car.replace(/U=/g, "Ū");
car = car.replace(/O=/g, "Ō");
car = car.replace(/E=/g, "Ē");
car = car.replace(/Ā=/g, "A");
car = car.replace(/Ī=/g, "I");
car = car.replace(/Ū=/g, "U");
car = car.replace(/Ō=/g, "O");
car = car.replace(/Ē=/g, "Ĕ");
car = car.replace(/Ĕ=/g, "E");
car = car.replace(/\^S/g, "Š");
car = car.replace(/D=/g, "Ḏ");
car = car.replace(/Ḏ=/g, "D");
car = car.replace(/H=/g, "Ḥ");
car = car.replace(/Ḥ=/g, "H");
car = car.replace(/T=/g, "Ṭ");
car = car.replace(/Ṭ=/g, "T");
car = car.replace(/S=/g, "Ṣ");
car = car.replace(/Ṣ=/g, "Š");
car = car.replace(/Š=/g, "S");


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