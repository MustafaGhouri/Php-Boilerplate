//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a/g, "а");
car = car.replace(/b/g, "б");
car = car.replace(/[cç]/g, "ч");
car = car.replace(/d/g, "д");
car = car.replace(/e/g, "е");
car = car.replace(/ä/g, "ә");
car = car.replace(/f/g, "ф");
car = car.replace(/g/g, "г");
car = car.replace(/h/g, "х");
car = car.replace(/i/g, "и");
car = car.replace(/j/g, "җ");
car = car.replace(/ž/g, "ж");
car = car.replace(/k/g, "к");
car = car.replace(/l/g, "л");
car = car.replace(/m/g, "м");
car = car.replace(/n/g, "н");
car = car.replace(/ň/g, "ң");
car = car.replace(/o/g, "о");
car = car.replace(/ö/g, "ө");
car = car.replace(/p/g, "п");
car = car.replace(/r/g, "р");
car = car.replace(/s/g, "с");
car = car.replace(/ş/g, "ш");
car = car.replace(/t/g, "т");
car = car.replace(/u/g, "у");
car = car.replace(/ü/g, "ү");
car = car.replace(/w/g, "в");
car = car.replace(/y/g, "ы");
car = car.replace(/ý/g, "й");
car = car.replace(/z/g, "з");

car = car.replace(/җ=/g, "ж");
car = car.replace(/ж=/g, "җ");
car = car.replace(/е=/g, "ә");
car = car.replace(/ә=/g, "е");
car = car.replace(/а=/g, "ә");
car = car.replace(/о=/g, "ө");
car = car.replace(/ө=/g, "о");
car = car.replace(/у=/g, "ү");
car = car.replace(/ү=/g, "у");
car = car.replace(/н=/g, "ң");
car = car.replace(/ң=/g, "н");
car = car.replace(/и=/g, "й");
car = car.replace(/й=/g, "и");
car = car.replace(/ы=/g, "й");

car = car.replace(/A/g, "А");
car = car.replace(/B/g, "Б");
car = car.replace(/Ç/g, "Ч");
car = car.replace(/D/g, "Д");
car = car.replace(/E/g, "Е");
car = car.replace(/Ä/g, "Ә");
car = car.replace(/F/g, "Ф");
car = car.replace(/G/g, "Г");
car = car.replace(/H/g, "Х");
car = car.replace(/I/g, "И");
car = car.replace(/J/g, "Җ");
car = car.replace(/Ž/g, "Ж");
car = car.replace(/K/g, "К");
car = car.replace(/L/g, "Л");
car = car.replace(/M/g, "М");
car = car.replace(/N/g, "Н");
car = car.replace(/Ň/g, "Ң");
car = car.replace(/O/g, "О");
car = car.replace(/Ö/g, "Ө");
car = car.replace(/P/g, "П");
car = car.replace(/R/g, "Р");
car = car.replace(/S/g, "С");
car = car.replace(/Ş/g, "Ш");
car = car.replace(/T/g, "Т");
car = car.replace(/U/g, "У");
car = car.replace(/Ü/g, "Ү");
car = car.replace(/W/g, "В");
car = car.replace(/Y/g, "Ы");
car = car.replace(/Ý/g, "Й");
car = car.replace(/Z/g, "З");
car = car.replace(/йу/g, "ю");
car = car.replace(/йа/g, "я");

car = car.replace(/Җ=/g, "Ж");
car = car.replace(/Ж=/g, "Җ");
car = car.replace(/Е=/g, "Ә");
car = car.replace(/Ә=/g, "Е");
car = car.replace(/А=/g, "Ә");
car = car.replace(/О=/g, "Ө");
car = car.replace(/Ө=/g, "О");
car = car.replace(/У=/g, "Ү");
car = car.replace(/Ү=/g, "У");
car = car.replace(/Н=/g, "Ң");
car = car.replace(/Ң=/g, "Н");
car = car.replace(/И=/g, "Й");
car = car.replace(/Й=/g, "И");
car = car.replace(/Ы=/g, "Й");

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