//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/_/g, "=");
car = car.replace(/c=/g, "č");
car = car.replace(/ç/g, "č");
car = car.replace(/č=/g, "ć");
car = car.replace(/ć=/g, "c");
car = car.replace(/d=/g, "đ");
car = car.replace(/đ=/g, "d");
car = car.replace(/s=/g, "š");
car = car.replace(/š=/g, "s");
car = car.replace(/z=/g, "ž");
car = car.replace(/ž=/g, "z");
car = car.replace(/C=/g, "Č");
car = car.replace(/Ç/g, "Č");
car = car.replace(/Č=/g, "Ć");
car = car.replace(/Ć=/g, "C");
car = car.replace(/D=/g, "Đ");
car = car.replace(/Đ=/g, "D");
car = car.replace(/S=/g, "Š");
car = car.replace(/Š=/g, "S");
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