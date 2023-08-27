//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/c=/g, "ç");
car = car.replace(/ç=/g, "c");
car = car.replace(/C=/g, "Ç");
car = car.replace(/Ç=/g, "C");
car = car.replace(/g=/g, "ğ");
car = car.replace(/ğ=/g, "g");
car = car.replace(/G=/g, "Ğ");
car = car.replace(/Ğ=/g, "G");
car = car.replace(/n=/g, "ñ");
car = car.replace(/ñ=/g, "ŋ");
car = car.replace(/ŋ=/g, "n");
car = car.replace(/N=/g, "Ñ");
car = car.replace(/Ñ=/g, "Ŋ");
car = car.replace(/Ŋ=/g, "N");
car = car.replace(/s=/g, "ş");
car = car.replace(/ş=/g, "s");
car = car.replace(/S=/g, "Ş");
car = car.replace(/Ş=/g, "S");
car = car.replace(/o=/g, "ö");
car = car.replace(/ö=/g, "o");
car = car.replace(/O=/g, "Ö");
car = car.replace(/Ö=/g, "O");
car = car.replace(/u=/g, "ü");
car = car.replace(/ü=/g, "ū");
car = car.replace(/ū=/g, "u");
car = car.replace(/U=/g, "Ü");
car = car.replace(/Ü=/g, "Ū");
car = car.replace(/Ū=/g, "U");
car = car.replace(/i=/g, "ı");
car = car.replace(/ı=/g, "i");
car = car.replace(/I=/g, "İ");
car = car.replace(/İ=/g, "I");

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