var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/’/g, "\'");
car = car.replace(/a/g, "ا");
car = car.replace(/A/g, "ئ");
car = car.replace(/b/g, "ب");
car = car.replace(/ب'/g, "پ");
car = car.replace(/p/g, "پ");
car = car.replace(/t/g, "ت");
car = car.replace(/j/g, "ج");
car = car.replace(/c/g, "چ");
car = car.replace(/ج'/g, "چ");
car = car.replace(/H/g, "ح");
car = car.replace(/ح'/g, "خ");
car = car.replace(/x/g, "خ");
car = car.replace(/K/g, "خ");
car = car.replace(/d/g, "د");
car = car.replace(/r/g, "ر");
car = car.replace(/رر/g, "ڕ");
car = car.replace(/z/g, "ز");
car = car.replace(/ر'/g, "ز");
car = car.replace(/ز'/g, "ژ");
car = car.replace(/s/g, "س");
car = car.replace(/س'/g, "ش");
car = car.replace(/G/g, "ع");
car = car.replace(/ع'/g, "غ");
car = car.replace(/f/g, "ف");
car = car.replace(/ف'/g, "ڤ");
car = car.replace(/v/g, "ڤ");
car = car.replace(/q/g, "ق");
car = car.replace(/k/g, "ک");
car = car.replace(/ک'/g, "گ");
car = car.replace(/g/g, "گ");
car = car.replace(/l/g, "ل");
car = car.replace(/لل/g, "ڵ");
car = car.replace(/m/g, "م");
car = car.replace(/n/g, "ن");
car = car.replace(/e/g, "ە");
car = car.replace(/h/g, "ه");
car = car.replace(/[uw]/g, "و");
car = car.replace(/û/g, "وو");
car = car.replace(/o/g, "ۆ");
car = car.replace(/y/g, "ی");
car = car.replace(/[éêè]/g, "ێ");
car = car.replace(/[iíî]/g, "ی");
car = car.replace(/ی'/g, "ێ");

car = car.replace(/\?/g, "؟");
car = car.replace(/\;/g, "؛");
car = car.replace(/\,/g, "،");
car = car.replace(/0/g, "۰");
car = car.replace(/1/g, "۱");
car = car.replace(/2/g, "۲");
car = car.replace(/3/g, "۳");
car = car.replace(/4/g, "٤");
car = car.replace(/5/g, "٥");
car = car.replace(/6/g, "٦");
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
