//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/‘/g, "ъ");
car = car.replace(/’/g, "ъ");
car = car.replace(/\'/g, "ъ");
car = car.replace(/ʻ/g, "ъ");
car = car.replace(/ʼ/g, "ъ");

car = car.replace(/h/g, "ҳ");
car = car.replace(/a/g, "а");
car = car.replace(/b/g, "б");
car = car.replace(/c/g, "ч");
car = car.replace(/чҳ/g, "ч");
car = car.replace(/d/g, "д");
car = car.replace(/e/g, "е");
car = car.replace(/ее/g, "э");
car = car.replace(/эе/g, "е");
car = car.replace(/ е/g, " э");
car = car.replace(/f/g, "ф");
car = car.replace(/g/g, "г");
car = car.replace(/гъ/g, "ғ");
car = car.replace(/i/g, "и");
car = car.replace(/j/g, "ж");
car = car.replace(/k/g, "к");
car = car.replace(/q/g, "қ");
car = car.replace(/l/g, "л");
car = car.replace(/m/g, "м");
car = car.replace(/n/g, "н");
car = car.replace(/o/g, "о");
car = car.replace(/оъ/g, "ў");
car = car.replace(/p/g, "п");
car = car.replace(/r/g, "р");
car = car.replace(/s/g, "с");
car = car.replace(/сҳ/g, "ш");
car = car.replace(/t/g, "т");
car = car.replace(/u/g, "у");
car = car.replace(/v/g, "в");
car = car.replace(/x/g, "х");
car = car.replace(/y/g, "й");
car = car.replace(/z/g, "з");
car = car.replace(/A/g, "А");
car = car.replace(/B/g, "Б");

car = car.replace(/H/g, "Ҳ");
car = car.replace(/C/g, "Ч");
car = car.replace(/ЧҲ/g, "Ч");
car = car.replace(/Чҳ/g, "Ч");
car = car.replace(/D/g, "Д");
car = car.replace(/E/g, "Е");
car = car.replace(/ЕЕ/g, "Э");
car = car.replace(/ЭЕ/g, "Е");
car = car.replace(/ Е/g, " Э");
car = car.replace(/F/g, "Ф");
car = car.replace(/G/g, "Г");
car = car.replace(/Гъ/g, "Ғ");
car = car.replace(/I/g, "И");
car = car.replace(/J/g, "Ж");
car = car.replace(/K/g, "К");
car = car.replace(/Q/g, "Қ");
car = car.replace(/L/g, "Л");
car = car.replace(/M/g, "М");
car = car.replace(/N/g, "Н");
car = car.replace(/O/g, "О");
car = car.replace(/Оъ/g, "Ў");
car = car.replace(/P/g, "П");
car = car.replace(/R/g, "Р");
car = car.replace(/S/g, "С");
car = car.replace(/СҲ/g, "Ш");
car = car.replace(/Сҳ/g, "Ч");
car = car.replace(/T/g, "Т");
car = car.replace(/U/g, "У");
car = car.replace(/V/g, "В");
car = car.replace(/X/g, "Х");
car = car.replace(/Y/g, "Й");
car = car.replace(/Z/g, "З");

car = car.replace(/йа/g, "я");
car = car.replace(/йо/g, "ё");
car = car.replace(/йу/g, "ю");
car = car.replace(/тс/g, "ц");
car = car.replace(/ЙА/g, "Я");
car = car.replace(/ЙО/g, "Ё");
car = car.replace(/ЙУ/g, "Ю");
car = car.replace(/ТС/g, "Ц");
car = car.replace(/Йа/g, "Я");
car = car.replace(/Йе/g, "Ё");
car = car.replace(/Йу/g, "Ю");
car = car.replace(/Тс/g, "Ц");


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