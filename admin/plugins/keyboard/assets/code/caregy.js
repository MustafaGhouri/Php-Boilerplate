//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/_/g, "=");
car = car.replace(/\^s/g, "š");
car = car.replace(/s=/g, "š");
car = car.replace(/i=/g, "ỉ");
car = car.replace(/d=/g, "ḏ");
car = car.replace(/h=/g, "ẖ");
car = car.replace(/ẖ=/g, "ḫ");
car = car.replace(/t=/g, "ṯ");
car = car.replace(/ḫ=/g, "ḥ");
car = car.replace(/ḥ=/g, "h");
car = car.replace(/k=/g, "ḳ");
car = car.replace(/\</g, "ˁ");
car = car.replace(/\>/g, "ȝ");
car = car.replace(/x/g, "ḫ");
car = car.replace(/a/g, "ꜣ");
car = car.replace(/ꜣꜣ/g, "ꜥ");

car = car.replace(/\^S/g, "Š");
car = car.replace(/S=/g, "Š");
car = car.replace(/I=/g, "Ỉ");
car = car.replace(/D=/g, "Ḏ");
car = car.replace(/H=/g, "H̱");
car = car.replace(/H̱=/g, "Ḫ");
car = car.replace(/T=/g, "Ṯ");
car = car.replace(/Ḫ=/g, "Ḥ");
car = car.replace(/Ḥ=/g, "H");
car = car.replace(/K=/g, "Ḳ");
car = car.replace(/X/g, "Ḫ");
car = car.replace(/A/g, "Ꜣ");
car = car.replace(/ꜢꜢ/g, "Ꜥ");

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