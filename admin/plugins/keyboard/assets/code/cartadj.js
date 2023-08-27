//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a/g, "а");
car = car.replace(/b/g, "б");
car = car.replace(/v/g, "в");
car = car.replace(/g/g, "г");
car = car.replace(/ƣ/g, "ғ");
car = car.replace(/г=/g, "ғ");
car = car.replace(/d/g, "д");
car = car.replace(/e/g, "е");
car = car.replace(/ƶ/g, "ж");
car = car.replace(/z/g, "з");
car = car.replace(/з=/g, "ж");
car = car.replace(/i/g, "и");
car = car.replace(/ī/g, "ӣ");
car = car.replace(/и=/g, "ӣ");
car = car.replace(/j/g, "й");
car = car.replace(/k/g, "к");
car = car.replace(/q/g, "қ");
car = car.replace(/l/g, "л");
car = car.replace(/m/g, "м");
car = car.replace(/n/g, "н");
car = car.replace(/o/g, "о");
car = car.replace(/p/g, "п");
car = car.replace(/r/g, "р");
car = car.replace(/s/g, "с");
car = car.replace(/t/g, "т");
car = car.replace(/u/g, "у");
car = car.replace(/ū/g, "ӯ");
car = car.replace(/у=/g, "ӯ");
car = car.replace(/f/g, "ф");
car = car.replace(/x/g, "х");
car = car.replace(/h/g, "ҳ");
car = car.replace(/c/g, "ч");
car = car.replace(/ç/g, "ҷ");
car = car.replace(/ч=/g, "ҷ");
car = car.replace(/ş/g, "ш");
car = car.replace(/с=/g, "ш");
car = car.replace(/’/g, "ъ"); //var
car = car.replace(/'/g, "ъ"); //var
car = car.replace(/ʹ/g, "ъ");
car = car.replace(/e/g, "э");
car = car.replace(/йу/g, "ю");
car = car.replace(/йа/g, "я");
car = car.replace(/йо/g, "ё");

car = car.replace(/A/g, "А");
car = car.replace(/B/g, "Б");
car = car.replace(/V/g, "В");
car = car.replace(/G/g, "Г");
car = car.replace(/Ƣ/g, "Ғ");
car = car.replace(/Г=/g, "Ғ");
car = car.replace(/D/g, "Д");
car = car.replace(/E/g, "Е");
car = car.replace(/Ƶ/g, "Ж");
car = car.replace(/Z/g, "З");
car = car.replace(/З=/g, "Ж");
car = car.replace(/I/g, "И");
car = car.replace(/Ī/g, "Ӣ");
car = car.replace(/И=/g, "Ӣ");
car = car.replace(/J/g, "Й");
car = car.replace(/K/g, "К");
car = car.replace(/Q/g, "Қ");
car = car.replace(/L/g, "Л");
car = car.replace(/M/g, "М");
car = car.replace(/N/g, "Н");
car = car.replace(/O/g, "О");
car = car.replace(/P/g, "П");
car = car.replace(/R/g, "Р");
car = car.replace(/S/g, "С");
car = car.replace(/T/g, "Т");
car = car.replace(/U/g, "У");
car = car.replace(/Ū/g, "Ӯ");
car = car.replace(/У=/g, "Ӯ");
car = car.replace(/F/g, "Ф");
car = car.replace(/X/g, "Х");
car = car.replace(/H/g, "Ҳ");
car = car.replace(/C/g, "Ч");
car = car.replace(/Ç/g, "Ҷ");
car = car.replace(/Ч=/g, "Ҷ");
car = car.replace(/Ş/g, "Ш");
car = car.replace(/С=/g, "Ш");
car = car.replace(/E/g, "Э");
car = car.replace(/ЙУ/g, "Ю");
car = car.replace(/ЙА/g, "Я");
car = car.replace(/ЙО/g, "Ё");
car = car.replace(/Йу/g, "Ю");
car = car.replace(/Йа/g, "Я");
car = car.replace(/Йо/g, "Ё");

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