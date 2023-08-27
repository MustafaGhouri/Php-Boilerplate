//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/’/g, "\'");
car = car.replace(/A/g, "ئ");
car = car.replace(/a/g, "ا");
car = car.replace(/b/g, "ب");
car = car.replace(/p/g, "پ");
car = car.replace(/t/g, "ت");
car = car.replace(/j/g, "ج");
car = car.replace(/ج'/g, "چ");
car = car.replace(/[cç]/g, "چ");
car = car.replace(/[xH]/g, "خ");
car = car.replace(/d/g, "د");
car = car.replace(/r/g, "ر");
car = car.replace(/z/g, "ز");
car = car.replace(/ز'/g, "ژ");
car = car.replace(/s/g, "س");
car = car.replace(/ş/g, "ش");
car = car.replace(/س'/g, "ش");
car = car.replace(/[Gğ]/g, "غ");
car = car.replace(/f/g, "ف");
car = car.replace(/q/g, "ق");
car = car.replace(/k/g, "ك");
car = car.replace(/ك'/g, "ڭ");
car = car.replace(/g/g, "گ");
car = car.replace(/l/g, "ل");
car = car.replace(/m/g, "م");
car = car.replace(/n/g, "ن");
car = car.replace(/h/g, "ھ");
car = car.replace(/e/g, "ە");
car = car.replace(/o/g, "و");
car = car.replace(/و'/g, "ۆ");
car = car.replace(/ö/g, "ۆ");
car = car.replace(/u/g, "ۇ");
car = car.replace(/ۇ'/g, "ۈ");
car = car.replace(/ü/g, "ۈ");
car = car.replace(/[wv]/g, "ۋ");
car = car.replace(/[iı]/g, "ى");
car = car.replace(/ى'/g, "ې");
car = car.replace(/é/g, "ې");
car = car.replace(/y/g, "ي");

car = car.replace(/\?/g, "؟");
car = car.replace(/\;/g, "؛");
car = car.replace(/\,/g, "،");
car = car.replace(/0/g, "۰");
car = car.replace(/1/g, "۱");
car = car.replace(/2/g, "۲");
car = car.replace(/3/g, "۳");
car = car.replace(/4/g, "۴");
car = car.replace(/5/g, "۵");
car = car.replace(/6/g, "۶");
car = car.replace(/7/g, "۷");
car = car.replace(/8/g, "۸");
car = car.replace(/9/g, "۹");

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