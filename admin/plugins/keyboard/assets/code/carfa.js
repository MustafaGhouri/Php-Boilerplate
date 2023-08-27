//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/’/g, "\'");
car = car.replace(/a/g, "ا");
car = car.replace(/اا/g, "آ");
car = car.replace(/[âā]/g, "آ");
car = car.replace(/b/g, "ب");
car = car.replace(/ب'/g, "پ");
car = car.replace(/p/g, "پ");
car = car.replace(/t/g, "ت");
car = car.replace(/ت'/g, "ث");
car = car.replace(/j/g, "ج");
car = car.replace(/[cč]/g, "چ");
car = car.replace(/ج'/g, "چ");
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
car = car.replace(/ž/g, "ژ");
car = car.replace(/s/g, "س");
car = car.replace(/س'/g, "ش");
car = car.replace(/š/g, "ش");
car = car.replace(/S/g, "ص");
car = car.replace(/ص'/g, "ض");
car = car.replace(/D/g, "ض");
car = car.replace(/T/g, "ط");
car = car.replace(/ط'/g, "ظ");
car = car.replace(/Z/g, "ظ");
car = car.replace(/G/g, "ع");
car = car.replace(/ʿ/g, "ع");
car = car.replace(/ع'/g, "غ");
car = car.replace(/ġ/g, "غ");
car = car.replace(/f/g, "ف");
car = car.replace(/q/g, "ق");
car = car.replace(/k/g, "ک");
car = car.replace(/ک'/g, "گ");
car = car.replace(/g/g, "گ");
car = car.replace(/l/g, "ل");
car = car.replace(/m/g, "م");
car = car.replace(/n/g, "ن");
car = car.replace(/h/g, "ه");
car = car.replace(/e/g, "ه");
car = car.replace(/é/g, "ه");
car = car.replace(/w/g, "و");
car = car.replace(/v/g, "و");
car = car.replace(/o/g, "و");
car = car.replace(/u/g, "و");
car = car.replace(/y/g, "ی");
car = car.replace(/i/g, "ی");
// car  = car.replace(/e/g, "ی");
car = car.replace(/ی'/g, "ي");
car = car.replace(/-/g, "ء");
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
car = car.replace(/\//g, "\u200b");

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