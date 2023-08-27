//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a/g, "а");
car = car.replace(/b/g, "б");
car = car.replace(/v/g, "в");
car = car.replace(/q/g, "г");
car = car.replace(/ğ/g, "ғ");
car = car.replace(/d/g, "д");
car = car.replace(/e/g, "е");
car = car.replace(/ə/g, "ә");
car = car.replace(/j/g, "ж");
car = car.replace(/z/g, "з");
car = car.replace(/i/g, "и");
car = car.replace(/ı/g, "ы");
car = car.replace(/y/g, "ј");
car = car.replace(/k/g, "к");
car = car.replace(/g/g, "ҝ");
car = car.replace(/l/g, "л");
car = car.replace(/m/g, "м");
car = car.replace(/n/g, "н");
car = car.replace(/o/g, "о");
car = car.replace(/ö/g, "ө");
car = car.replace(/p/g, "п");
car = car.replace(/r/g, "р");
car = car.replace(/s/g, "с");
car = car.replace(/t/g, "т");
car = car.replace(/u/g, "у");
car = car.replace(/ü/g, "ү");
car = car.replace(/f/g, "ф");
car = car.replace(/x/g, "х");
car = car.replace(/h/g, "һ");
car = car.replace(/ç/g, "ч");
car = car.replace(/c/g, "ҹ");
car = car.replace(/ş/g, "ш");

car = car.replace(/г=/g, "ғ");
car = car.replace(/ғ=/g, "г");
car = car.replace(/е=/g, "ә");
car = car.replace(/ә=/g, "е");
car = car.replace(/к=/g, "ҝ");
car = car.replace(/ҝ=/g, "к");
car = car.replace(/о=/g, "ө");
car = car.replace(/ө=/g, "о");
car = car.replace(/у=/g, "ү");
car = car.replace(/ү=/g, "у");
car = car.replace(/ч=/g, "ҹ");
car = car.replace(/ҹ=/g, "ч");

car = car.replace(/A/g, "А");
car = car.replace(/B/g, "Б");
car = car.replace(/V/g, "В");
car = car.replace(/Q/g, "Г");
car = car.replace(/Ğ/g, "Ғ");
car = car.replace(/D/g, "Д");
car = car.replace(/E/g, "Е");
car = car.replace(/Ə/g, "Ә");
car = car.replace(/J/g, "Ж");
car = car.replace(/Z/g, "З");
car = car.replace(/İ/g, "И");
car = car.replace(/I/g, "Ы");
car = car.replace(/Y/g, "Ј");
car = car.replace(/K/g, "К");
car = car.replace(/G/g, "Ҝ");
car = car.replace(/L/g, "Л");
car = car.replace(/M/g, "М");
car = car.replace(/N/g, "Н");
car = car.replace(/O/g, "О");
car = car.replace(/Ö/g, "Ө");
car = car.replace(/P/g, "П");
car = car.replace(/R/g, "Р");
car = car.replace(/S/g, "С");
car = car.replace(/T/g, "Т");
car = car.replace(/U/g, "У");
car = car.replace(/Ü/g, "Ү");
car = car.replace(/F/g, "Ф");
car = car.replace(/X/g, "Х");
car = car.replace(/H/g, "Һ");
car = car.replace(/Ç/g, "Ч");
car = car.replace(/C/g, "Ҹ");
car = car.replace(/Ş/g, "Ш");

car = car.replace(/Г=/g, "Ғ");
car = car.replace(/Ғ=/g, "Г");
car = car.replace(/Е=/g, "Ә");
car = car.replace(/Ә=/g, "Е");
car = car.replace(/К=/g, "Ҝ");
car = car.replace(/Ҝ=/g, "К");
car = car.replace(/О=/g, "Ө");
car = car.replace(/Ө=/g, "О");
car = car.replace(/У=/g, "Ү");
car = car.replace(/Ү=/g, "У");
car = car.replace(/Ч=/g, "Ҹ");
car = car.replace(/Ҹ=/g, "Ч");

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