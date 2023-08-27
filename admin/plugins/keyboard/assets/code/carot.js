//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/’/g, "\'");
car = car.replace(/a/g, "ا");
car = car.replace(/اا/g, "آ");
car = car.replace(/b/g, "ب");
car = car.replace(/ب'/g, "پ");
car = car.replace(/p/g, "پ");
car = car.replace(/t/g, "ت");
car = car.replace(/ت'/g, "ث");
car = car.replace(/c/g, "ج");
car = car.replace(/ج'/g, "چ");
car = car.replace(/ç/g, "چ");
car = car.replace(/C/g, "چ");
car = car.replace(/H/g, "ح");
car = car.replace(/ح'/g, "خ");
car = car.replace(/x/g, "خ");
car = car.replace(/K/g, "خ");
car = car.replace(/d/g, "د");
car = car.replace(/د'/g, "ذ");
car = car.replace(/r/g, "ر");
car = car.replace(/z/g, "ز");
car = car.replace(/ر'/g, "ز");
car = car.replace(/ز'/g, "ژ");
car = car.replace(/j/g, "ژ");
car = car.replace(/s/g, "س");
car = car.replace(/س'/g, "ش");
car = car.replace(/S/g, "ص");
car = car.replace(/ص'/g, "ض");
car = car.replace(/D/g, "ض");
car = car.replace(/T/g, "ط");
car = car.replace(/ط'/g, "ظ");
car = car.replace(/Z/g, "ظ");
car = car.replace(/G/g, "ع");
car = car.replace(/ع'/g, "غ");
car = car.replace(/f/g, "ف");
car = car.replace(/q/g, "ق");
car = car.replace(/k/g, "ك");
car = car.replace(/ك'/g, "ڭ");
car = car.replace(/g/g, "گ");
car = car.replace(/ñ/g, "ڭ");
car = car.replace(/N/g, "ڭ");
car = car.replace(/l/g, "ل");
car = car.replace(/m/g, "م");
car = car.replace(/n/g, "ن");
car = car.replace(/h/g, "ه");
car = car.replace(/ه'/g, "ة");
car = car.replace(/w/g, "و");
car = car.replace(/v/g, "و");
car = car.replace(/o/g, "و");
car = car.replace(/u/g, "و");
car = car.replace(/y/g, "ي");
car = car.replace(/i/g, "ي");
car = car.replace(/e/g, "ي");
car = car.replace(/-/g, "ء");
car = car.replace(/وءء/g, "ؤ");
car = car.replace(/يءء/g, "ئ");
car = car.replace(/اءء/g, "إ");
car = car.replace(/I/g, "إ");
car = car.replace(/A/g, "إ");
car = car.replace(/ءا/g, "أ");
car = car.replace(/_/g, "ـ");

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