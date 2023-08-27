//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/x/g, "х");
car = car.replace(/a/g, "а");
car = car.replace(/b/g, "б");
car = car.replace(/v/g, "в");
car = car.replace(/g/g, "г");
car = car.replace(/d/g, "д");
car = car.replace(/e/g, "е");
car = car.replace(/[ëé]/g, "ё");
car = car.replace(/е=/g, "ё")
car = car.replace(/z/g, "з");
car = car.replace(/ž/g, "ж");
car = car.replace(/зh/g, "ж")
car = car.replace(/з=/g, "ж");
car = car.replace(/ж=/g, "з");
car = car.replace(/i/g, "и");
car = car.replace(/j/g, "й");
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
car = car.replace(/c/g, "ц");
car = car.replace(/č/g, "ч");
car = car.replace(/ц=/g, "ч");
car = car.replace(/цh/g, "ч");
car = car.replace(/ч=/g, "ц");
car = car.replace(/š/g, "ш");
car = car.replace(/с=/g, "ш");
car = car.replace(/сh/g, "ш");
car = car.replace(/ш=/g, "с");
car = car.replace(/ŝ/g, "щ");
car = car.replace(/шч/g, "щ");
car = car.replace(/y/g, "ы");
car = car.replace(/[èê]/g, "э");
car = car.replace(/ё=/g, "э");
car = car.replace(/э=/g, "е");
car = car.replace(/йу/g, "ю");
car = car.replace(/йа/g, "я");
car = car.replace(/û/g, "ю");
car = car.replace(/â/g, "я");
car = car.replace(/’/g, "ь"); //var
car = car.replace(/'/g, "ь"); //var
car = car.replace(/ʹ/g, "ь");
car = car.replace(/ʺ/g, "ъ");
car = car.replace(/ьь/g, "ъ");
car = car.replace(/h/g, "х");

car = car.replace(/X/g, "Х");
car = car.replace(/A/g, "А");
car = car.replace(/B/g, "Б");
car = car.replace(/V/g, "В");
car = car.replace(/G/g, "Г");
car = car.replace(/D/g, "Д");
car = car.replace(/E/g, "Е");
car = car.replace(/Ë/g, "Ё");
car = car.replace(/Е=/g, "Ё");
car = car.replace(/Z/g, "З");
car = car.replace(/Ž/g, "Ж");
car = car.replace(/ЗH/g, "Ж");
car = car.replace(/Зh/g, "Ж");
car = car.replace(/З=/g, "Ж");
car = car.replace(/Ж=/g, "З");
car = car.replace(/I/g, "И");
car = car.replace(/J/g, "Й");
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
car = car.replace(/C/g, "Ц");
car = car.replace(/Č/g, "Ч");
car = car.replace(/ЦH/g, "Ч");
car = car.replace(/Цh/g, "Ч");
car = car.replace(/Ц=/g, "Ч");
car = car.replace(/Ч=/g, "Ц");
car = car.replace(/Š/g, "Ш");
car = car.replace(/СH/g, "Ш");
car = car.replace(/Сh/g, "Ш");
car = car.replace(/С=/g, "Ш");
car = car.replace(/Ш=/g, "С");
car = car.replace(/Š/g, "Щ");
car = car.replace(/ШЧ/g, "Щ");
car = car.replace(/Шч/g, "Щ");
car = car.replace(/Y/g, "Ы");
car = car.replace(/[ÈÊ]/g, "Э");
car = car.replace(/Ё=/g, "Э");
car = car.replace(/Э=/g, "Е");
car = car.replace(/ЙУ/g, "Ю");
car = car.replace(/ЙА/g, "Я");
car = car.replace(/Йу/g, "Ю");
car = car.replace(/Йа/g, "Я");
car = car.replace(/Û/g, "Ю");
car = car.replace(/Â/g, "Я");
car = car.replace(/H/g, "Х");

car = car.replace(/ь=/g, "Ь");
car = car.replace(/ъ=/g, "Ъ");
car = car.replace(/Ь=/g, "ь");
car = car.replace(/Ъ=/g, "ъ");

car = car.replace(/w/g, "щ");
car = car.replace(/W/g, "Щ");
car = car.replace(/q/g, "́");

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