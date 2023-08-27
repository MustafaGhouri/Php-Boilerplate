//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/’/g, "\'");
car = car.replace(/a/g, "ا");
car = car.replace(/اا/g, "آ");
car = car.replace(/[āâ]/g, "آ");
car = car.replace(/ʾ/g, "ء");
car = car.replace(/-/g, "ء");
car = car.replace(/ءا/g, "أ");
car = car.replace(/ا'/g, "أ");

car = car.replace(/b/g, "ب");
car = car.replace(/ب'/g, "پ");
car = car.replace(/p/g, "پ");
car = car.replace(/t/g, "ت");
car = car.replace(/ت'/g, "ث");
car = car.replace(/ث'/g, "ٿ");
car = car.replace(/ٿ'/g, "ت");
car = car.replace(/تت/g, "ٹ");
car = car.replace(/ṭ/g, "ٹ");
car = car.replace(/j/g, "ج");
car = car.replace(/c/g, "چ");
car = car.replace(/ج'/g, "چ");
car = car.replace(/H/g, "ح");
car = car.replace(/ح'/g, "خ");
car = car.replace(/x/g, "خ");
car = car.replace(/K/g, "خ");
car = car.replace(/خ'/g, "ج");

car = car.replace(/A/g, "ݮ");
car = car.replace(/حح/g, "ݮ");

car = car.replace(/U/g, "څ");
car = car.replace(/I/g, "ځ");
car = car.replace(/چ'/g, "ځ");
car = car.replace(/ځ'/g, "څ");
car = car.replace(/څ'/g, "ݮ");
car = car.replace(/ݮ'/g, "ݯ");
car = car.replace(/ݯ'/g, "ح");

car = car.replace(/d/g, "د");
car = car.replace(/د'/g, "ذ");
car = car.replace(/ذ'/g, "ڐ");
car = car.replace(/ڐ'/g, "د");
car = car.replace(/دد/g, "ڈ");
car = car.replace(/ḍ/g, "ڈ");
car = car.replace(/r/g, "ر");
car = car.replace(/z/g, "ز");
car = car.replace(/ر'/g, "ز");
car = car.replace(/ز'/g, "ژ");
car = car.replace(/ژ'/g, "ڙ");
car = car.replace(/ڙ'/g, "ر");
car = car.replace(/رر/g, "ڑ");
car = car.replace(/ṛ/g, "ڑ");
car = car.replace(/ڑ'/g, "ݱ");
car = car.replace(/ݱ'/g, "ڑ");

car = car.replace(/s/g, "س");
car = car.replace(/س'/g, "ش");
car = car.replace(/ش'/g, "ݰ");
car = car.replace(/ݰ'/g, "س");

car = car.replace(/S/g, "ص");
car = car.replace(/ص'/g, "ض");
car = car.replace(/ض'/g, "ص");
car = car.replace(/D/g, "ض");
car = car.replace(/T/g, "ط");
car = car.replace(/ط'/g, "ظ");
car = car.replace(/[ZŻż]/g, "ظ");
car = car.replace(/ظ'/g, "ط");
car = car.replace(/G/g, "ع");
car = car.replace(/ع'/g, "غ");
car = car.replace(/ğ/g, "غ");
car = car.replace(/غ'/g, "ع");
car = car.replace(/f/g, "ف");
car = car.replace(/q/g, "ق");
car = car.replace(/k/g, "ک");
car = car.replace(/ک'/g, "گ");
car = car.replace(/g/g, "گ");
car = car.replace(/گ'/g, "ک");
car = car.replace(/l/g, "ل");
car = car.replace(/m/g, "م");
car = car.replace(/[NṄṅ]/g, "ں");
car = car.replace(/n/g, "ن");
car = car.replace(/ں'/g, "ن");
car = car.replace(/ن'/g, "ں");
car = car.replace(/[uūovw]/g, "و");
car = car.replace(/h/g, "ہ");
car = car.replace(/ہ'/g, "ھ");
car = car.replace(/e/g, "ے");
car = car.replace(/[yiī]/g, "ی");

car = car.replace(/ل'/g, "ڵ");
car = car.replace(/ڵ'/g, "ل");

car = car.replace(/ی'/g, "ي");
car = car.replace(/\?/g, "؟");
car = car.replace(/\;/g, "؛");
car = car.replace(/\,/g, "،");

car = car.replace(/&&/g, "ّ");
car = car.replace(/&ا/g, "َ");
car = car.replace(/&و/g, "ُ");
car = car.replace(/&ی/g, "ِ");

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

car = car.replace(/&&/g, "ّ");
car = car.replace(/&ا/g, "َ");
car = car.replace(/&و/g, "ُ");
car = car.replace(/&ی/g, "ِ");


car = car.replace(/ए/g, "ے");
car = car.replace(/य/g, "ی");
car = car.replace(/ह/g, "ہ");
car = car.replace(/व/g, "و");
car = car.replace(/ङ/g, "ں");
car = car.replace(/न/g, "ن");
car = car.replace(/म/g, "م");
car = car.replace(/ल/g, "ل");
car = car.replace(/ग/g, "گ");
car = car.replace(/क/g, "ک");
car = car.replace(/क़/g, "ق");
car = car.replace(/फ़/g, "ف");
car = car.replace(/ग़/g, "غ");
car = car.replace(/ज़/g, "ظ");
car = car.replace(/त/g, "ط");
car = car.replace(/ज़/g, "ض");
car = car.replace(/स/g, "ص");
car = car.replace(/श/g, "ش");
car = car.replace(/स/g, "س");
car = car.replace(/झ़/g, "ژ");
car = car.replace(/ज़/g, "ز");
car = car.replace(/ड़/g, "ڑ");
car = car.replace(/र/g, "ر");
car = car.replace(/ज़/g, "ذ");
car = car.replace(/ड/g, "ڈ");
car = car.replace(/द/g, "د");
car = car.replace(/ख़/g, "خ");
car = car.replace(/ह/g, "ح");
car = car.replace(/च/g, "چ");
car = car.replace(/ज/g, "ج");
car = car.replace(/स/g, "ث");
car = car.replace(/ट/g, "ٹ");
car = car.replace(/त/g, "ت");
car = car.replace(/प/g, "پ");
car = car.replace(/ब/g, "ب");
car = car.replace(/आ/g, "آ");



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