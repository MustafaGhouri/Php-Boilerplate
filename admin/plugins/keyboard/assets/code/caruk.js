//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a/g, "а");
car = car.replace(/b/g, "б");
car = car.replace(/v/g, "в");
car = car.replace(/h/g, "г");
car = car.replace(/g/g, "ґ");
car = car.replace(/d/g, "д");
car = car.replace(/e/g, "е");
car = car.replace(/z/g, "з");
car = car.replace(/ž/g, "ж");
car = car.replace(/з=/g, "ж")
car = car.replace(/y/g, "и");
car = car.replace(/i/g, "і");
car = car.replace(/j/g, "й");
car = car.replace(/йі/g, "ї");
car = car.replace(/йе/g, "є");
car = car.replace(/k/g, "к");
car = car.replace(/l/g, "л");
car = car.replace(/m/g, "м");
car = car.replace(/n/g, "н");
car = car.replace(/o/g, "о");
car = car.replace(/p/g, "п");
car = car.replace(/r/g, "р");
car = car.replace(/s/g, "с");
car = car.replace(/t/g, "т");
car = car.replace(/u/g, "у");
car = car.replace(/f/g, "ф");
car = car.replace(/x/g, "х");
car = car.replace(/c/g, "ц");
car = car.replace(/č/g, "ч");
car = car.replace(/ц=/g, "ч");
car = car.replace(/цг/g, "ч");
car = car.replace(/š/g, "ш");
car = car.replace(/с=/g, "ш");
car = car.replace(/сг/g, "ш");
car = car.replace(/шч/g, "щ");
car = car.replace(/йу/g, "ю");
car = car.replace(/йа/g, "я");
car = car.replace(/’’/g, "ь");
car = car.replace(/''/g, "ь");

car = car.replace(/A/g, "А");
car = car.replace(/B/g, "Б");
car = car.replace(/V/g, "В");
car = car.replace(/H/g, "Г");
car = car.replace(/G/g, "Ґ");
car = car.replace(/D/g, "Д");
car = car.replace(/E/g, "Е");
car = car.replace(/Z/g, "З");
car = car.replace(/Ž/g, "Ж");
car = car.replace(/З=/g, "Ж");
car = car.replace(/Y/g, "И");
car = car.replace(/I/g, "І");
car = car.replace(/J/g, "Й");
car = car.replace(/ЙІ/g, "Ї");
car = car.replace(/ЙЕ/g, "Є");
car = car.replace(/K/g, "К");
car = car.replace(/L/g, "Л");
car = car.replace(/M/g, "М");
car = car.replace(/N/g, "Н");
car = car.replace(/O/g, "О");
car = car.replace(/P/g, "П");
car = car.replace(/R/g, "Р");
car = car.replace(/S/g, "С");
car = car.replace(/T/g, "Т");
car = car.replace(/U/g, "У");
car = car.replace(/F/g, "Ф");
car = car.replace(/X/g, "Х");
car = car.replace(/C/g, "Ц");
car = car.replace(/Č/g, "Ч");
car = car.replace(/Ц=/g, "Ч");
car = car.replace(/ЦГ/g, "Ч");
car = car.replace(/Š/g, "Ш");
car = car.replace(/С=/g, "Ш");
car = car.replace(/СГ/g, "Ш");
car = car.replace(/ШЧ/g, "Щ");
car = car.replace(/ЙУ/g, "Ю");
car = car.replace(/ЙА/g, "Я");

car = car.replace(/w/g, "щ");
car = car.replace(/W/g, "Щ");
car = car.replace(/q/g, "́");

// du russe
car = car.replace(/г=/g, "ґ");
car = car.replace(/ґ=/g, "г");
car = car.replace(/Г=/g, "Ґ");
car = car.replace(/Ґ=/g, "Г");
car = car.replace(/е=/g, "є");
car = car.replace(/є=/g, "е");
car = car.replace(/Е=/g, "Є");
car = car.replace(/Є=/g, "Е");
car = car.replace(/и=/g, "і");
car = car.replace(/і=/g, "ї");
car = car.replace(/ї=/g, "и");
car = car.replace(/И=/g, "І");
car = car.replace(/І=/g, "Ї");
car = car.replace(/Ї=/g, "И");

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