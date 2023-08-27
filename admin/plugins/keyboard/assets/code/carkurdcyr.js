//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a/g, "а");
car = car.replace(/b/g, "б");
car = car.replace(/c/g, "щ");
car = car.replace(/ç/g, "ч");
car = car.replace(/щ=/g, "ч");
car = car.replace(/ч=/g, "щ");
car = car.replace(/d/g, "д");
car = car.replace(/e/g, "ә");
car = car.replace(/ê/g, "е");
car = car.replace(/ә=/g, "е");
car = car.replace(/е=/g, "э");
car = car.replace(/э=/g, "ә");
car = car.replace(/f/g, "ф");
car = car.replace(/g/g, "г");
car = car.replace(/h/g, "һ");
car = car.replace(/i/g, "ь");
car = car.replace(/î/g, "и");
car = car.replace(/ь=/g, "и");
car = car.replace(/и=/g, "ь");
car = car.replace(/j/g, "ж");
car = car.replace(/k/g, "к");
car = car.replace(/l/g, "л");
car = car.replace(/m/g, "м");
car = car.replace(/n/g, "н");
car = car.replace(/o/g, "o");
car = car.replace(/p/g, "п");
car = car.replace(/q/g, "ԛ");
car = car.replace(/r/g, "р");
car = car.replace(/s/g, "с");
car = car.replace(/ş/g, "ш");
car = car.replace(/с=/g, "ш");
car = car.replace(/ш=/g, "с");
car = car.replace(/t/g, "т");
car = car.replace(/u/g, "ӧ");
car = car.replace(/û/g, "у");
car = car.replace(/ӧ=/g, "у");
car = car.replace(/у=/g, "ӧ");
car = car.replace(/v/g, "в");
car = car.replace(/w/g, "ԝ");
car = car.replace(/x/g, "х");
car = car.replace(/y/g, "й");
car = car.replace(/z/g, "з");

car = car.replace(/A/g, "А");
car = car.replace(/B/g, "Б");
car = car.replace(/C/g, "Щ");
car = car.replace(/Ç/g, "Ч");
car = car.replace(/Щ=/g, "Ч");
car = car.replace(/Ч=/g, "Щ");
car = car.replace(/D/g, "Д");
car = car.replace(/E/g, "Ә");
car = car.replace(/Ê/g, "Е");
car = car.replace(/Ә=/g, "Е");
car = car.replace(/Е=/g, "Э");
car = car.replace(/Э=/g, "Ә");
car = car.replace(/F/g, "Ф");
car = car.replace(/G/g, "Г");
car = car.replace(/H/g, "Һ");
car = car.replace(/I/g, "Ь");
car = car.replace(/Î/g, "И");
car = car.replace(/Ь=/g, "И");
car = car.replace(/И=/g, "Ь");
car = car.replace(/J/g, "Ж");
car = car.replace(/K/g, "К");
car = car.replace(/L/g, "Л");
car = car.replace(/M/g, "М");
car = car.replace(/N/g, "Н");
car = car.replace(/O/g, "O");
car = car.replace(/P/g, "П");
car = car.replace(/Q/g, "Ԛ");
car = car.replace(/R/g, "Р");
car = car.replace(/S/g, "С");
car = car.replace(/Ş/g, "Ш");
car = car.replace(/С=/g, "Ш");
car = car.replace(/Ш=/g, "С");
car = car.replace(/T/g, "Т");
car = car.replace(/U/g, "Ӧ");
car = car.replace(/Û/g, "У");
car = car.replace(/Ӧ=/g, "У");
car = car.replace(/У=/g, "Ӧ");
car = car.replace(/V/g, "В");
car = car.replace(/W/g, "Ԝ");
car = car.replace(/X/g, "Х");
car = car.replace(/Y/g, "Й");
car = car.replace(/Z/g, "З");

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